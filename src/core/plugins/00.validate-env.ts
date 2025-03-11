import { z } from "zod";

/** Schema zod for validating env vars */
const publicEnvSchema = z.object({});

/** Nuxt plugin to validate env vars */
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  try {
    const publicEnv = publicEnvSchema.parse(config.public);

    return {
      provide: {
        env: {
          public: publicEnv,
        },
      },
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      // eslint-disable-next-line no-console
      console.error("❌ Invalid public environment variables:", error.issues);
      throw createError({
        statusCode: 500,
        message: `❌ Environment Variables validation failed: ${error}`,
        cause: error,
        fatal: true,
      });
    }
    throw error;
  }
});
