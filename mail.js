var nodmailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service:'gmail',
	auth:{
		user: 'lipazzehavi@gmail.com',
		pass:'li8940589'
	}
});

var mailOptions ={
	from:'lipazzehavi@gmail.com',
	subject: 'Sending Email using Node.js',
	text: 'That was easy!',
};

transporter.sendMail(mailOptions,function(error,info){
	if(error){
		console.log(error);
	}else{
		console.log('Email send: '+info.repsonse);
	}
});