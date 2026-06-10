import { LLMApi, ChatOptions, LLMModel, LLMUsage } from "../../api";

export class OpenRouterApi implements LLMApi {
  async chat(options: ChatOptions): Promise<void> {
    const { messages, config, onUpdate, onFinish, onError } = options;

    const requestPayload = {
      model: config.model,
      messages,
      temperature: config.temperature,
      top_p: config.top_p,
      max_tokens: undefined,
      stream: true,
    };

    try {
      const controller = new AbortController();
      options.onController?.(controller);

      const response = await fetch("/api/openrouter/chat/completions", {
        method: "POST",
        body: JSON.stringify(requestPayload),
        signal: controller.signal,
      });

      if (!response.ok) throw new Error(`OpenRouter error: ${response.statusText}`);

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let result = "";

      while (reader) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("data: ");

        for (const line of lines) {
          const data = line.trim();
          if (!data || data === "[DONE]") continue;

          try {
            const json = JSON.parse(data);
            const content = json.choices[0]?.delta?.content || "";
            result += content;
            onUpdate?.(result, content);
          } catch (e) {
            console.error("[OpenRouter] parsing error", e, data);
          }
        }
      }

      onFinish?.(result, response);
    } catch (e) {
      onError?.(e as Error);
    }
  }

  async speech(): Promise<ArrayBuffer> {
    throw new Error("OpenRouter does not support speech");
  }

  async usage(): Promise<LLMUsage> {
    return { used: 0, total: 0 };
  }

  async models(): Promise<LLMModel[]> {
    return [
      {
        name: "meta-llama/llama-3-70b-instruct",
        displayName: "Llama 3 70B (via OpenRouter)",
        provider: {
          id: "openrouter",
          providerName: "OpenRouter",
          providerType: "openrouter",
          sorted: 0,
        },
        available: true,
        sorted: 0,
      },
    ];
  }
}