import app from "./app";
import { config } from "./config";

app.listen(config.PORT, () => {
  if (config.NODE_ENV === "development")
    console.log(`Listening on http://localhost:${config.PORT}`);
});
