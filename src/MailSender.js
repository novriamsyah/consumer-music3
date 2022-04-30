const nodemailer = require('nodemailer');

class MailSender {
  constructor() {
    this._transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD,
      },
    });
  }

  sendEmail(targetEmail, playlistName, content) {
    const message = {
      from: 'Open Music App',
      to: targetEmail,
      subject: `Ekspor Playlist ${playlistName}`,
      text: `Terlampir hasil dari ekspor playlist ${playlistName}`,
      attachments: [
        {
          filename: `playlist-${playlistName}.json`,
          content,
        },
      ],
    };

    return this._transporter.sendMail(message);
  }
}

module.exports = MailSender;