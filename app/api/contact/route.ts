import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, service, message } = await request.json();

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios.' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'Meu Site <hello@bazestudeo.com.br>', // ✅ domínio verificado (pode ser qualquer endereço)
      to: ['marllon@bazestudeo.com.br'],          // ✅ redirecionamento Cloudflare
      subject: `Novo contato - ${service}`,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Serviço:</strong> ${service}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}