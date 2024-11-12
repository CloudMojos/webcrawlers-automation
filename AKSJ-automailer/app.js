const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "angatkabataangsanjoseno@gmail.com", // Replace with your Gmail address
        pass: "tflp mphe kwod qvkh", // Replace with your app password
    },
});

// const emailList = [
//     { email: "edwinjrbesanaabache@gmail.com", nickname: "ED" },
//     { email: "christianleeayaton@gmail.com", nickname: "Lee" },
//     { email: "nelvinellaga1204@gmail.com", nickname: "Nelvs" },
//     { email: "annemargarettetiberio@gmail.com", nickname: "Meg" },
//     { email: "w412k26@gmail.com", nickname: "Nani" },
//     { email: "rosemarieesparraguerra407@gmail.com", nickname: "rm" },
//     { email: "rainraingoaw4y@gmail.com", nickname: "Reign" },
//     { email: "bsentrep.pobleteal@gmail.com", nickname: "Ace" },
//     { email: "ronyumul0@gmail.com", nickname: "Ron" },
//     { email: "destacamentoarman@gmail.com", nickname: "Man" },
//     { email: "ronancrebello133@gmail.com", nickname: "Ronan" },
//     { email: "isabella11192095@gmail.com", nickname: "LA" },
//     { email: "garciahannahsophia@gmail.com", nickname: "Sophia" },
//     { email: "drconferido@gmail.com", nickname: "Mico" },
//     { email: "hadrianrobo@gmail.com", nickname: "Hadri" },
//     { email: "johnrovicnoynay02@gmail.com", nickname: "Pam" },
//     { email: "superjoerge31@gmail.com", nickname: "Joerge" },
//     { email: "chariesaira.247@gmail.com", nickname: "Cha" },
//     { email: "edensanchez1513@gmail.com", nickname: "Den" },
//     { email: "sijeeyyy29@gmail.com", nickname: "Cj" },
//     { email: "bpa.avancenamp@gmail.com", nickname: "Melay" },
//     { email: "bundatlima@gmail.com", nickname: "Khai" },
//     { email: "escamillamaehoney10@gmail.com", nickname: "Iska" },
//     { email: "islalamore@gmail.com", nickname: "Gen" },
//     { email: "angelamarielleobina@gmail.com", nickname: "Lay" },
//     { email: "delrosariooig@gmail.com", nickname: "Yana" },
//     { email: "jabaljoenna@gmail.com", nickname: "Joe" },
//     { email: "joshuelernest.simbulan@gmail.com", nickname: "Joshuel" },
//     { email: "ee1a.reyes.patrickjohn@gmail.com", nickname: "Patrick" },
//     { email: "andreimoses04@gmail.com", nickname: "DREI" },
//     { email: "johnmartmalait@gmail.com", nickname: "JM" },
//     { email: "jamesdennisescalante@gmail.com", nickname: "JD" },
//     { email: "micahcamacho123@gmail.com", nickname: "Micah" },
//     { email: "garinmarielle28@gmail.com", nickname: "Maye" },
//     { email: "bpa.timbasetv@gmail.com", nickname: "Trish" },
//     { email: "caspemarkgabriel123@gmail.com", nickname: "Gab" },
//     { email: "louisecapricho@gmail.com", nickname: "Alex" },
//     { email: "jamiextabusao@gmail.com", nickname: "Jamie" },
//     { email: "miko.barcelo.mb25@gmail.com", nickname: "Miks" },
//     { email: "emmersonmorata@gmail.com", nickname: "Emmerson" },
//     { email: "iversonmauricio09@gmail.com", nickname: "Ayber" },
//     { email: "fioapplelladoc@gmail.com", nickname: "Fio" },
//     { email: "aeapaderes14@gmail.com", nickname: "Ara" },
//     { email: "crystalaaaaaaaaaa@gmail.com", nickname: "Crystal" },
//     { email: "sheenareginaalfaro@gmail.com", nickname: "Sheena" },
//     { email: "donndonnreyes@gmail.com", nickname: "Jaron" },
//     { email: "michellecampomanes18@gmail.com", nickname: "Mitch" },
//     { email: "renzmorota@gmail.com", nickname: "Renz" },
//     { email: "sakitorio001@gmail.com", nickname: "Saki" },
//     { email: "divinedeviancy@gmail.com", nickname: "chacha" },
//     { email: "bsentrep.carnicerjd@gmail.com", nickname: "Jetty" },
//     { email: "oscarbaladhay1@gmail.com", nickname: "Oscar" },
//     { email: "nicoletimtimanlovedorial@gmail.com", nickname: "Kai" },
//     { email: "jedrickael@gmail.com", nickname: "Kael" },
//     { email: "ywappaul@gmail.com", nickname: "Pau" },
//     { email: "sfp.romerosajc@gmail.com", nickname: "Jian" },
//     { email: "malabaojessieca@gmail.com", nickname: "Jess" },
//     { email: "cedrocedric90@gmail.com", nickname: "Cedie" },
//     { email: "cprabong@gmail.com", nickname: "Pat or Patrick" },
//     { email: "bonzonphyllismikaela@gmail.com", nickname: "Mikay" },
//     { email: "rockymarie.shockey.g@bulsu.edu.ph", nickname: "Rocky" },
//     { email: "riveraandreavianca@gmail.com", nickname: "Andrea" },
//     { email: "venerandobajado8@gmail.com", nickname: "Ven" },
//     { email: "dvynpunzal@gmail.com", nickname: "Dibina, divy, divs" },
//     { email: "ig.johndg@gmail.com", nickname: "Eric" },
//     { email: "adrianalvendo200414@gmail.com", nickname: "Adrian" },
//     { email: "kristianlsn468@gmail.com", nickname: "Tiano" },
//     { email: "abegailhaz1208@gmail.com", nickname: "ABI" },
//     { email: "kristelpalomar95@gmail.com", nickname: "Elle" },
//     { email: "hannahpaufrivaldo@gmail.com", nickname: "Hannah" },
//     { email: "yzapolicarpio@gmail.com", nickname: "Ysa" },
//     { email: "shanna.macyy@gmail.com", nickname: "Macy" },
//     { email: "arserdena9@gmail.com", nickname: "Anne" },
//     { email: "katrice.alessandra.dayao@gmail.com", nickname: "Sandra" },
//     { email: "alliyahdipon@gmail.com", nickname: "Alya" },
//     { email: "alyssa.tanay@gmail.com", nickname: "ALY" },
//     { email: "jamesleeborgonia1998@gmail.com", nickname: "James" },
//     { email: "businesswithjohnmartgarcia@gmail.com", nickname: "JM" },
//     { email: "adsoliven@up.edu.ph", nickname: "AA" },
//     { email: "apostaderojlloyd684@gmail.com", nickname: "Lloyd" },
//     { email: "macayandani@gmail.com", nickname: "Dani" },
//     { email: "desilvaprincesssarah@gmail.com", nickname: "Cess" },
//     { email: "ayubanivohntracy@gmail.com", nickname: "Ivon" },
//     { email: "clarz.sone09@gmail.com", nickname: "Clarz" },
//     { email: "kyleanthonygalang@gmail.com", nickname: "Kyle" },
//     { email: "wahabjason4@gmail.com", nickname: "Jason" },
//     { email: "naiumi.ysa14@gmail.com", nickname: "Ysabelle" },
//     { email: "karrenreyes40@gmail.com", nickname: "Khai" },
//     { email: "haiderderderob@gmail.com", nickname: "Robi" },
//     { email: "trinityshar.26@gmail.com", nickname: "Shar" },
//     { email: "canbenosa@gmail.com", nickname: "Gel" },
//     { email: "elizabethdanice@gmail.com", nickname: "Eliz" },
//     { email: "johnjehricon@gmail.com", nickname: "Echo" },
//     { email: "catherinemayevangelio11@gmail.com", nickname: "Cath" },
//     { email: "denniemagpantay24@gmail.com", nickname: "dennie" },
//     { email: "ellajomellierose00@gmail.com", nickname: "Eya" },
//     { email: "ricaabata0@gmail.com", nickname: "Kay" },
// ];

// const emailList = [
//   { email: "jaze.simbulan@gmail.com", nickname: "Joshuel" },
//   //   { email: "markchristiancayabyab@yahoo.com", nickname: "Nani" },
// ];

// Step 3: Send emails to each recipient

// const emailList = [
//   { email: "edwinjrbesanaabache@gmail.com", nickname: "ED" },
//   { email: "destacamentoarman@gmail.com", nickname: "Man" },
//   { email: "delrosariooig@gmail.com", nickname: "Yana" },
//   { email: "joshuel.simbulan@gmail.com", nickname: "Joshuel" },
//   { email: "michellecampomanes18@gmail.com", nickname: "Mitch" },
//   { email: "canarezcrone27@gmail.com", nickname: "Crone" },
//   { email: "patrickjianrazon@gmail.com", nickname: "Peej" },
//   { email: "caliganjeneslyn@gmail.com", nickname: "Jen" },
//   { email: "bsentrep.pobleteal@gmail.com", nickname: "Ace" },
//   { email: "christianleeayaton@gmail.com", nickname: "Lee/Lei" },
//   { email: "rockymarie.shockey.g@bulsu.edu.ph", nickname: "Rocky" },
//   { email: "hadrianrobo@gmail.com", nickname: "Hadri/Ian" },
//   { email: "riveraandreavianca@gmail.com", nickname: "Andrea" },
//   { email: "janellamaerepizo30@gmail.com", nickname: "Nella" },
//   { email: "yzapolicarpio@gmail.com", nickname: "Ysa" },
//   { email: "fayealvarado18@gmail.com", nickname: "Dada" },
//   { email: "mendozabrixterc@gmail.com", nickname: "Brix" },
//   { email: "franchescapanganiban1@gmail.com", nickname: "Franky" },
//   { email: "karenjoygo21@gmail.com", nickname: "Karz" },
//   { email: "adsoliven@up.edu.ph", nickname: "AA" },
//   { email: "delacruzjanicamay@gmail.com", nickname: "Ja" },
//   { email: "kaye.prevendido@gmail.com", nickname: "Kaye" },
//   { email: "ayubanivohntracy@gmail.com", nickname: "Ivon" },
//   { email: "razlopez.v1@gmail.com", nickname: "Raz" },
//   { email: "andreaportugal0290@gmail.com", nickname: "Ayu" },
//   { email: "manzanodeniecepaula@gmail.com", nickname: "Deniece" },
//   { email: "ester.leyson@gmail.com", nickname: "Khoi" },
//   { email: "jonielabadilla1234@gmail.com", nickname: "nyel" },
//   { email: "naiumi.ysa14@gmail.com", nickname: "Ysabelle" },
//   { email: "trinityshar.26@gmail.com", nickname: "Shar" },
//   { email: "elizabethdanice@gmail.com", nickname: "Eliz" },
//   { email: "shanna.macyy@gmail.com", nickname: "Macy" },
// ];

const sendEmails = async () => {
    for (const recipient of emailList) {
        const mailOptions = {
            from: "joshuel.simbulan@gmail.com", // Add the from field
            to: recipient.email, // Send to each individual email
            subject: "Magandang Araw, Kabataang San Joseño!",
            html: `
        <p>Dear <strong>${recipient.nickname}</strong>,</p>
        <p>Thank you so much for signing up to our Membership and Committee Recruitment that happened recently. This email is to confirm that we have received your application. In line with this, we would like to welcome you as you join <strong>Angat Kabataan San Joseño</strong>! Your participation in our organization will play a vital role in progressive change in our community.</p>

        <p><strong>🎉 Congratulations, Angat Kabataan San Joseño Member! 🥳</strong></p>

        <p>To formally welcome you, we would like to invite you to our first general assembly and orientation for the members of AKSJ. Also, kindly join our official group chat. Please click the link below.</p>

        <p><strong>📣 Event: General Assembly and Orientation</strong><br>
        <strong>📅 Date: November 16, 2024, 1PM</strong><br>
        <strong>🏛️ Venue: TBA</strong><br>
        <strong>💬 Messenger Link: https://m.me/j/AbZNjRuPPY46fEaT/</strong></p>

        <p>If you have any questions, you may contact <strong>Nani Cayabyab 🌸 AKSJ Volunteer 🌸 0938 169 5999</strong></p>

        <p><em>Yours truly,</em><br>
        <strong>Angat Kabataan San Joseño 🌸</strong></p>

        <img src="cid:signatureImage" alt="Signature" style="width:800px; height:auto;" />
      `,
            attachments: [
                {
                    filename: "signature.png", // Name of the image file
                    path: "AKSJ-watermark.png", // Local path to the image
                    cid: "signatureImage", // Content ID for embedding
                },
            ],
        };

        try {
            const info = await transporter.sendMail(mailOptions);
            console.log(
                `Email sent to ${recipient.email}, ${recipient.nickname}: ${info.response}`
            );
        } catch (error) {
            console.error(`Failed to send email to ${recipient}: ${error}`);
        }
    }
};

// Run the function
sendEmails();
