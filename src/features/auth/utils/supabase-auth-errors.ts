interface AuthError {
  status?: number;
  name: string;
  message: string;
  stack?: string;
  cause?: unknown;
  code?: string;
}

/** Dictionary containing some firebase auth error messages in Spanish to show to end user
 *
 * @see https://supabase.com/docs/guides/auth/debugging/error-codes
 */
const errormessagesMappedToSpanish = {
  anonymous_provider_disabled:
    "La opción de iniciar sesión de forma anónima está desactivada.",
  bad_json:
    "Hubo un problema al procesar la información enviada. Por favor, inténtalo de nuevo.",
  bad_jwt: "Tu sesión ha caducado. Por favor, inicia sesión nuevamente.",
  bad_oauth_callback:
    "Hubo un problema al conectar con tu cuenta. Por favor, inténtalo de nuevo.",
  bad_oauth_state:
    "La conexión con tu cuenta no se pudo verificar. Por favor, inténtalo nuevamente.",
  captcha_failed:
    "La verificación de seguridad no fue exitosa. Por favor, recarga la página e inténtalo de nuevo.",
  conflict:
    "Se detectó un conflicto al procesar tu solicitud. Por favor, espera unos momentos e inténtalo nuevamente.",
  email_address_invalid:
    "La dirección de correo electrónico ingresada no es válida. Por favor, verifica e inténtalo de nuevo.",
  email_address_not_authorized:
    "No tienes permiso para acceder con esta dirección de correo electrónico.",
  email_exists:
    "Esta dirección de correo electrónico ya está registrada. Por favor, utiliza otra o inicia sesión.",
  email_not_confirmed:
    "Tu dirección de correo electrónico no ha sido confirmada. Revisa tu bandeja de entrada para completar el proceso.",
  email_provider_disabled:
    "El registro mediante correo electrónico está desactivado en este momento.",
  flow_state_expired:
    "Tu sesión ha expirado. Por favor, inicia sesión nuevamente.",
  flow_state_not_found:
    "No se pudo encontrar tu sesión. Por favor, inicia sesión nuevamente.",
  hook_timeout:
    "La solicitud está tardando más de lo esperado. Por favor, verifica tu conexión e inténtalo de nuevo.",
  identity_already_exists: "Esta cuenta ya está vinculada a otro usuario.",
  identity_not_found:
    "No se encontró la información de tu cuenta. Por favor, verifica e inténtalo de nuevo.",
  insufficient_aal:
    "Se requiere una verificación adicional para acceder. Por favor, completa el proceso de autenticación.",
  invite_not_found: "La invitación no es válida o ha expirado.",
  invalid_credentials:
    "Las credenciales ingresadas son incorrectas. Por favor, verifica e inténtalo de nuevo.",
  manual_linking_disabled: "La vinculación manual de cuentas está desactivada.",
  mfa_challenge_expired:
    "El tiempo para completar la verificación ha expirado. Por favor, solicita una nueva verificación.",
  mfa_factor_not_found:
    "No se encontró el método de verificación. Por favor, configura uno nuevo.",
  mfa_verification_failed:
    "La verificación no fue exitosa. Por favor, verifica el código e inténtalo de nuevo.",
  no_authorization: "Se requiere autenticación para acceder a este recurso.",
  not_admin: "No tienes los permisos necesarios para realizar esta acción.",
  oauth_provider_not_supported:
    "El método de autenticación seleccionado no está soportado.",
  otp_disabled:
    "La autenticación mediante códigos de un solo uso está desactivada.",
  otp_expired: "El código ha expirado. Por favor, solicita uno nuevo.",
  over_email_send_rate_limit:
    "Se han enviado demasiados correos electrónicos en poco tiempo. Por favor, espera e inténtalo más tarde.",
  over_request_rate_limit:
    "Se han realizado demasiadas solicitudes en poco tiempo. Por favor, espera e inténtalo más tarde.",
  phone_exists:
    "Este número de teléfono ya está registrado. Por favor, utiliza otro o inicia sesión.",
  phone_not_confirmed:
    "Tu número de teléfono no ha sido confirmado. Por favor, completa el proceso de verificación.",
  phone_provider_disabled:
    "El registro mediante número de teléfono está desactivado en este momento.",
  provider_disabled:
    "El método de autenticación seleccionado está desactivado.",
  provider_email_needs_verification:
    "Es necesario verificar tu dirección de correo electrónico. Revisa tu bandeja de entrada para completar el proceso.",
  reauthentication_needed:
    "Por seguridad, por favor, confirma nuevamente tu identidad.",
  refresh_token_not_found:
    "Tu sesión ha caducado. Por favor, inicia sesión nuevamente.",
  request_timeout:
    "La solicitud ha tardado demasiado en responder. Por favor, verifica tu conexión e inténtalo de nuevo.",
  same_password:
    "La nueva contraseña no puede ser igual a la anterior. Por favor, elige una diferente.",
  session_expired:
    "Tu sesión ha expirado. Por favor, inicia sesión nuevamente.",
  session_not_found:
    "No se encontró una sesión activa. Por favor, inicia sesión.",
  signup_disabled:
    "El registro de nuevas cuentas está desactivado en este momento.",
  sms_send_failed:
    "Hubo un problema al enviar el mensaje de texto. Por favor, verifica tu número e inténtalo de nuevo.",
  sso_provider_not_found:
    "No se encontró el proveedor de inicio de sesión único. Por favor, verifica e inténtalo de nuevo.",
  unexpected_failure:
    "Ocurrió un error inesperado. Por favor, recarga la página e inténtalo nuevamente.",
  user_already_exists:
    "Ya existe una cuenta con esta información. Por favor, inicia sesión o utiliza otra información.",
  user_banned:
    "Tu cuenta ha sido suspendida. Si crees que esto es un error, por favor, contacta al soporte.",
  user_not_found:
    "No se encontró una cuenta con esta información. Por favor, verifica e inténtalo de nuevo.",
  validation_failed:
    "Algunos datos ingresados no son válidos. Por favor, verifica e inténtalo nuevamente.",
  weak_password:
    "La contraseña ingresada es demasiado débil. Por favor, elige una más segura.",
} as const;

export function parseSupabaseAuthError(error: AuthError): string {
  const defaultMessage =
    "Ocurrió un error inesperado en la autenticación. Por favor, intenta nuevamente más tarde.";

  return error.code
    ? (errormessagesMappedToSpanish[
        error.code as keyof typeof errormessagesMappedToSpanish
      ] ?? defaultMessage)
    : defaultMessage;
}
