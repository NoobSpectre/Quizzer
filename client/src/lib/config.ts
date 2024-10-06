type Config = {
  BASE_SERVER_URL: string;
  BASE_SERVER_API: `api/v${number}`;
};

const DEFAULT_SERVER_URL = "http://localhost:7000";
const DEFAULT_SERVER_API = "api/v1";

export const config = {
  BASE_SERVER_URL:
    (import.meta.env.BASE_SERVER_URL as string) || DEFAULT_SERVER_URL,
  BASE_SERVER_API: ((import.meta.env.BASE_SERVER_API as string) ||
    DEFAULT_SERVER_API) as Config["BASE_SERVER_API"],
} satisfies Config;
