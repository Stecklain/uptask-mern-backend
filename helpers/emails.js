import nodemailer from 'nodemailer';

export const emailRegistro = async (datos) => {
    const { email, nombre, token } = datos;

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
    });

    const info = await transport.sendMail({
        from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject: "UpTask - Confirma tu cuenta",
        text: "Comprueba tu cuenta en UpTask",
        html: `<p>Hola: ${nombre}! Comprueba tu cuenta en UpTask</p>
        <p>Tu cuenta ya está casi lista, solo debes comprobarla en el siguiente enlace:</p>

        <a href="${process.env.FRONTEND_PC_URL}/confirmar/${token}">Comprobar Cuenta</a>
            
        <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje.</p>`,
    });
}

export const emailOlvidePassword = async (datos) => {
    const { email, nombre, token } = datos;

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
    });

    const info = await transport.sendMail({
        from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject: "UpTask - restablece tu password",
        text: "Restablece tu password",
        html: `<p>Hola: ${nombre}! has solicitado restablecer tu password</p>
        
        <p>Sigue el siguiente enlace para generar un nuevo password:</p>

        <a href="${process.env.FRONTEND_PC_URL}/olvide-password/${token}">Restablecer password</a>
            
        <p>Si tu no solicitaste estes email, puedes ignorar el mensaje.</p>`,
    });
}

