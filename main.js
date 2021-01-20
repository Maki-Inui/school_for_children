/* ==============================
    リセットCSS
============================== */

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Overpass:wght@700&display=swap');


/* ==============================
    all
============================== */

body {
	font-family: 'Noto Sans JP', sans-serif;
	color: #2a2a2a;
	letter-spacing: 0.1em;
	box-sizing: border-box;

	h1 {
		letter-spacing: 0.12em;
	}

	h2 {
		font-family: 'Overpass', sans-serif;
		letter-spacing: 0.12em;
	}

	.heading {
		font-size: 20px;
		margin-top: 10px;
		letter-spacing: 0.4em;
	}

	p {
		line-height: 24px;
	}

	a {
		text-decoration: none;
	}
}

@media screen and (max-width: 768px) {
	h2 {
		font-size: 26px;
	}

	h3 {
		font-size: 20px;
	}

	.heading {
		font-size: 18px;
	}

}

@media screen and (min-width: 769px) {
	h2 {
		font-size: 40px;
		line-height: 1.7;
	}

	h3 {
		font-size: 30px;
	}

	.heading {
		font-size: 20px;
	}
}

/* ==============================
    ボタン設定
============================== */
.btn {
	background-color: #0e536d;
	font-size: 15px;
	line-height: 27px;
	padding: 34px 16px;
	transition: .3s;
	color: #fff;
}

.more {
	display: inline-block;
	margin-top: 100px;
	border-radius: 4px;

	&:hover {
		filter: brightness(120%) 
	}
}

@media screen and (max-width: 768px) {
	.more {
		padding: 18px 60px;
	}
}

@media screen and (min-width: 769px) {
	.more {
		padding: 30px 100px;
	}
}

/* ==============================
    Main-images
============================== */

main {
	background-color: #fae06a;
}

.swiper-container {
	position: relative;

	.swiper-slide {
		height: 700px;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		z-index: 0;
	}
	
	.swiper-slide.Slide1{
		background-image:url(images/main001.jpg)
	}
	
	.swiper-slide.Slide2{
		background-image:url(images/main002.jpg)
	}
	
	.swiper-slide.Slide3{
		background-image:url(images/main003.jpg)
	}

	.swiper-text {
		position: absolute;
		z-index: 20;
		color: #fff;
		opacity: 0.9;
		text-align: center;

		h1 {
			color: #fff;
		}

		h2 {
			margin-top: 20px;
			font-family: 'Overpass', sans-serif;
			color: #fff;
		}
	}

	.swiper-text2 {
		position: fixed;
		top:0;
		left:0;
		z-index: 20;
		background-color: #999999;
		border-bottom: 5px solid #0e536d;
		box-sizing: border-box;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;

		&.active {
			transform-origin: left top;
			transform: scale(0.7);
		}
	}

	.swiper-text3 {
		position: absolute;
		bottom: 10px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 20;

		p {
			position: absolute;
			bottom: 30px;
			left: -50%;
			color: #fff;
			letter-spacing: 0.12em;
			margin-bottom: 20px;
		}

		img {
			margin-top: 28px;
		}
	}

	.star-icon {
		position:absolute;
		bottom: -18px;
		right: -16px;
	}



}


.main-reserve {
	writing-mode:vertical-rl;
	position: fixed;
	top: 250px;
	right: 0;
	z-index: 20;
	padding-right: 16px;

	&:hover {
		filter: brightness(120%) 
	}
}


@media screen and (max-width: 768px) {
	.swiper-text {
		position: absolute;
		top: 480px;
		left: 50%;
		transform: translateX(-50%);
		width: 90%;
		margin-left: auto;
		margin-right: auto;
		text-align: center;

		h1 {
			font-size: 28px;
		}

		h2 {
			font-size: 22px;
		}
	}

	.swiper-text2 {
		width: 80px;
		height: 80px;
		font-size: 12px;
	}

	.sp-menu {
		display: block;
		position: fixed;
		top: 0;
		right: 0;
		z-index: 20;
		padding-right: 14px;
		padding-top: 10px;

		span {
			font-size: 34px;
			color: #F29C9F;
		}

		#open {
			font-size: 32px;
			line-height: 64px;
			cursor: pointer;

			&.hide {
				display: none;
			}
		}

	}

	.overlay {
		position: fixed;
		top: 0;
		left: 20%;
		right: 0;
		bottom: 0;
		background-color: #fff;
		color: #F29C9F;
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.6s;
		z-index: 50;

		&.show {
			opacity: 0.9;
			pointer-events: auto;
		}

		#close {
			position: fixed;
			top: 10px;
			right: 10px;
			font-size: 32px;
			cursor: pointer;
			z-index: 60;
		}

		.hamburger-inner {
			width: 315px;
			height: 80%;
			padding: 40px;

			li:not(:first-of-type) {
				padding-top: 38px;
			}
			
			a {
				color:#666666;
			}
		}
	}

	.Main-right {
		display: none;
	}

}

@media screen and (min-width: 769px) {
	main {
		.overlay {
			display: none;
		}
	}
	.swiper-text {
		position: absolute;
		top: 260px;
		left: 180px;
		text-align: center;

		h1 {
			font-size: 38px;
		}

		h2 {
			font-size: 32px;
		}
	}

	.swiper-text2 {
		width: 180px;
		height: 180px;
		font-size: 18px;
	}

	.sp-menu {
		display: none;
	}
	
}

/* ==============================
    menu
============================== */

@media screen and (max-width: 768px) {
.Menu {
	display: none;
}

}

@media screen and (min-width: 769px) {
	.Menu {
		height: 90px; 
		margin-bottom: 40px;

		nav {
			width: 70%;
			text-align: center;
			margin-left: auto;
			margin-right: auto;
			margin-top: 40px;
			padding: 20px 50px;
			padding-bottom: 0;
			/* border-radius: 6px; */
	
			ul {
				display: flex;
				justify-content: space-between;
				transition: .3s;
	
				li {
					font-size: 20px;
					padding-bottom: 20px;
						
					a {
						color: #2a2a2a;
						transition: .3s;
						box-sizing: border-box;
	
						p {
							margin-top: 10px;
							font-size: 14px;
						}
	
					}
	
					&:hover {
						border-bottom :2px solid #2a2a2a;
						opacity: .7s;
					}
				
				}
			}
	
		}
 }



}


/* ==============================
    Greeting
============================== */

.Greeting {
	width: 100%;
	text-align: center;
	margin-left: auto;
	margin-right: auto;
/* 	margin-top: 40px; */
	padding-top: 100px;
	padding-bottom: 100px;
	background-image: url(images/kyeboad.jpg);
	background-color:rgba(255,255,255,0.5); 
	background-blend-mode: lighten;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	

	.Greeting-description {
		display: flex;
		align-items: center;
		justify-content: center;
	}

  p {
		margin-top: 50px;
		text-align: left;
		line-height: 32px;
	}
}

@media screen and (max-width: 768px) {
	.Greeting {
		border-top: 2px solid #fff;
	}
	.Greeting-description {

		p {
			width: 70%;
		}

	}
}

@media screen and (min-width: 769px) {
	.Greeting-description {

		p {
			width: 60%;
		}

	}
}

/* ==============================
    Merit
============================== */

.Merit {
	text-align: center;
	margin-left: auto;
	margin-right: auto;
	margin-top: 40px;
	padding-top: 100px;
	padding-bottom: 100px;
	

	.message {
		margin-top: 30px;
	}

	.Merit-description {
		.merit {
			position: relative;
			margin-top: 50px;

			.merit-star {

	
				p {
					position: absolute;
					top: 38%;
					left: 50%;
					transform: translate(-50%,-50%);
				}
			}

			.merit-text {
				width: 280px;
				margin-top: 30px;

				p {
					color: #666666;
					text-align: left;
					line-height: 26px;
				}
			}

		}

	}


}

@media screen and (max-width: 768px) {
	.Merit {
		width: 70%;
		margin-right: auto;
		margin-left: auto;
		text-align: center;

		.merit-star {

			img {
				opacity: 0.6;

			}
		}

		.merit-text {
			display: inline-block;
		}
	}

	

}

@media screen and (min-width: 769px) {
	.Merit {
		width: 60%;

		.Merit-description {
			display: flex;
			justify-content: space-between;
			align-items: center;


		}

		.merit {
			opacity: 0;
			transform:translateY(70px);
			transition:1.5s;

			&:nth-of-type(2){
				transition-delay: 0.3s;
			}

			&:nth-of-type(3){
				transition-delay: 0.5s;
			}

			&.show {
				opacity:1;
				transform:none;

				img {
					opacity: 0.6;
				}

			}
		}




	}



}

/* ==============================
    About
============================== */
.About {
	margin-top: 40px;
	padding-top: 100px;
	padding-bottom: 100px;
	/* background-image: url(images/3113290_s.jpg); */
	background-color: #f6b7aa;

	.wrapper {
		text-align: center;
		margin-left: auto;
		margin-right: auto;
	}

	.message {
		margin-top: 30px;
	}

	.feature-description {
		margin-top: 50px;
	}

	.feature-box {
		position: relative;

		.photo {
			width: 100%;
			border-radius: 80px;


			img {
				width: 100%;
				border-radius: 80px;
			}
		}

		.feature-txt {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			margin-top: 30px;
		
			h3 {
				padding: 20px;
				text-align: left;
				color: #fff;
				background-color: rgba(20,20,20,.8);
				border-radius: 5px;


			}

			.txt-contents {
				display: block;
				position: relative;
				text-align: left;
				border-bottom: 3px solid #0e536d;
				background-color: #fff;
				border-radius: 5px;

				p {
					color: #666666;
					padding: 18px 20px;
				}

			}
		}

		&:nth-of-type(odd) {

			.feature-txt {

				.txt-contents {
					img {
						display: block;
						position: absolute;
						top: -22px;
						left: -24px;
					}
				}
			}
		}


		&:nth-of-type(even) {

			.feature-txt {
				align-items: flex-end;

			}
			
			.txt-contents img{
				position: absolute;
				top: -22px;
				right: -24px;
			}


		}

		&:not(:first-of-type) {
			margin-top: 50px;
		}

	
	}
}

@media screen and (max-width: 768px) {

	.About {

		.wrapper {
			width: 80%;
		}

		.feature-box {
			margin-top: 50px;

			h3 {
				font-size: 24px;
			}
		}
	}		
}

@media screen and (min-width: 769px) {

	.About {

		.wrapper {
			width: 70%;
		}

		.feature-box {
			display: flex;
			justify-content: center;
			align-items:flex-start;
			overflow: hidden;
			width: 100%;

			&.show .feature-txt h3,
			&:nth-of-type(even).show .feature-txt h3,
			&.show .photo,
			&:nth-of-type(even).show .photo,
			&.show .feature-txt .txt-contents {
				transform:none;
				opacity:1;
			}

			&:nth-of-type(even) {
				flex-direction: row-reverse;

				.photo {

					opacity:0;
					transform: translate(30px,30px);
					transition: 1s; 
				}

				.feature-txt h3 {
					opacity:0;
					transform: translateX(-50px);
					transition: 1s; 
				}
			}


			.photo {
				width: 46%;
				opacity:0;
				transform: translate(-30px,30px);
				transition: 1s; 
				overflow: hidden;
				cursor: pointer;

				img {
					width: 100%;
				}

				&:hover img {
					transform: scale(1.1);
					transition-duration: 0.5s;
				}
			}
			
			.feature-txt {
				width: 43%;

				h3 {
					font-size: 28px;
					opacity:0;
					transform: translatex(50px);
					transition: 1s; 
				}

				.txt-contents {
					opacity:0;
					transform: translateY(50px);
					transition: 1s; 
				}
			}

		}
	}
}

/* ==============================
    Course
============================== */
.Course {
	margin-top: 40px;
	padding-top: 100px;
	padding-bottom: 100px;

	.wrapper {
		width: 70%;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
	}

	.message {
		margin-top: 30px;
	}

	.Course-description {

		.Course-box {
			margin-top: 50px;
			
		}

		.learn {

			img {
				border-radius: 3px;
				margin-top: 30px;
			}

			.learn-txt {
				width: 400px;
				background-color: #fff;
				padding: 20px;
				padding-bottom: 50px;
				box-sizing: border-box;
			}
		}

		.price {
			display: inline-block;
			margin-top: -30px;
			padding: 20px 80px;
			border-radius: 4px;

			&:hover {
				filter: brightness(120%);
			}
		}
	}

}

@media screen and (max-width: 768px) {
	.Course {
		.wrapper {
			width: 80%;

			.Course-description {
					.Course-box {

					&:not(:first-of-type) {
						margin-top: 100px;
					}
				}
			}

			.learn {
				width: 100%;

				img{
					width: 100%;
				}

				.learn-txt {
					width: 100%;
				}
			}
		}
	}

}

@media screen and (min-width: 769px) {
	.Course {
		margin-top: 40px;
		padding-top: 100px;
		padding-bottom: 100px;
	
		.wrapper {
			width: 70%;
		}

		.Course-description {
			display: flex;
			justify-content: space-around;
			align-items: center;

			.Course-box {
				width: 30%;
				opacity: 0;
				transform:translateY(70px);
				transition:1.5s;
		
				&.show {
					opacity:1;
					transform:none;
				}

				.Couse-box-img {
					overflow: hidden;
					cursor: pointer;
					
					img {
						width: 100%;
  					transition-duration: 0.5s;
					}

					&:hover img {
						transform: scale(1.1);
  					transition-duration: 0.5s;
					}
				}

				.learn {
					width: 400px;

					.learn-txt {
						width: 400px;
					}
				}
			}
		}
	}

	
}


/* ==============================
    Voice
============================== */

.Voice {
	margin-top: 40px;
	padding-top: 100px;
	padding-bottom: 100px;
	background-color: #f6b7aa;
	/* background-image: url(images/3113290_s.jpg); */

	.wrapper {
		text-align: center;
		margin-left: auto;
		margin-right: auto;
	}

	.message {
		margin-top: 30px;
	}


	.Voice-description {
		margin-top: 50px;

		a {
			color: #2a2a2a;
		}

		.voice-container {
			width: 70%;
			display: inline-block;

			&:not(:first-of-type) {
				margin-top: 60px;
			}
		}

		.voice-box {

			.voice-txt {
				padding: 20px;
				background-color: #fff;

				h3 {
					font-size: 20px;
				}

				p {
					font-size: 15px;
					margin-top: 20px;

					span {
						display: inline-block;
						text-align: right;
						color: #f6b7aa;
	
						&:hover {
							opacity: .8;
						}
					}
				}

			}
		}


	}

}

@media screen and (max-width: 768px) {
	.Voice {
	
		.wrapper {
			width: 80%;
		}
	}

}

@media screen and (min-width: 769px) {
	.Voice {
	
		.wrapper {
			width: 70%;

			.voice-box {
				display: flex;
			}
		}
	}
}

/* ==============================
    Location
============================== */
.Location {
	margin-top: 40px;
	padding-top: 100px;
	padding-bottom: 150px;

	.wrapper {
		text-align: center;
		margin-left: auto;
		margin-right: auto;
	}

	.message {
		margin-top: 30px;
	}

	.Location-description {

		.location-box {
			background-color: #fff;
			max-width: 300px;
			margin-top: 100px;
			border-radius: 2px;
		}

		.school {
			
			img {
				margin-top: 30px;
			}
		}


		.search {
			display: inline-block;
			margin-top: 30px;
			border-radius: 4px;
			padding: 10px 12px;

			&:hover {
				filter: brightness(120%) 
			}
		}

		
	}

	.Free-lesson {
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		margin-top: 100px;
		overflow: hidden;

		p {
			font-size: 38px;
			font-weight: bold;
			color: #999999;
		}

		.free-lesson {
			display: inline-block;
			background-color: #F29C9F;
			border-radius: 10px;
			margin-top: 40px;
		}
	}



}

@media screen and (max-width: 768px) {
	.Location {
		.wrapper {
			width: 80%;

			.heading {
				font-size: 18px;
			}
			.Location-description {

				.location-box {
					max-width: 300px;
					display: inline-block;

					.school {
						padding-top: 20px;
						padding-bottom: 20px; 
					}

					.search {
						padding: 10px 40px;
					}
			}
			}

			.Free-lesson {

				p {
					letter-spacing: 260px;
				}

				.free-lesson {
					font-size: 24px;
					padding: 20px 30px;
					border-radius: 8px;
					letter-spacing: 0.2em;
				}
			}
			
		}
	}
}

@media screen and (min-width: 769px) {
	.Location {
		.wrapper {
			width: 70%;
		}

		.Location-description {
			display: flex;
			justify-content: space-around;
			align-items: center;

			.location-box {
				width: 30%;
				padding: 50px;
			}

			.search {
				padding: 20px 40px;
			}
		}

		.Free-lesson {
			width: 68%;

			p {
				font-size: 38px;
				letter-spacing: 680px;
			}

			.free-lesson {
				font-size: 26px;
				padding: 30px 80px;
				border-radius: 10px;
				margin-top: 40px;
				
				&:hover {
					opacity: 0.8;
				}
			}
		}

	
	}
}

/* ==============================
    Contact
============================== */

.Contact {
	padding-top: 70px;
	padding-bottom: 120px;
	/* background-color: #fff; */
 	background-image: url(images/1622700_l.jpg);
	background-color:rgba(255,255,255,0.5); 
	background-blend-mode: lighten;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat; 

	.wrapper {
		text-align: center;
		margin-left: auto;
		margin-right: auto;
	}

	.message {
		margin-top:16px;
		display: inline-block;
		
		.contact-form {
			display: inline-block;
			/* background-color: #f6b7aa; */
			background-color: #F29C9F;
			border-radius: 10px;
		}
	}

}

@media screen and (max-width: 768px) {
	.Contact {
		.wrapper {
			width: 80%;
		}

		.heading {
			font-size: 18px;
		}

		.message p {
			text-align: left;
			margin-top: 30px;
			padding: 10px;
		}

		.contact-form {
			font-size: 18px;
			margin-top: 22px;
			padding: 26px 50px;
		}
	}

}

@media screen and (min-width: 769px) {
	.Contact {
		padding-top: 250px;
		padding-bottom: 320px;

		.wrapper {
			width: 70%;
		}

		.contact-form {
			font-size: 18px;
			border-radius: 10px;
			margin-top: 60px;
			padding: 30px 100px;

			&:hover {
				opacity: 0.8;
			}
		}
	}
}

/* ==============================
    footer
============================== */
footer {
	background-color: #0e536d;
	padding-top: 100px;
	padding-bottom: 30px;
	text-align: center;

	a {
		display: inline-block;
		color:#fff;
	}
	
}

.footer-container {
	width: 80%;
	margin-left: auto;
	margin-right: auto;

	.footer-left {
		
		nav{

			ul {
				display: flex;

				li:not(:first-of-type) {
					padding-left: 20px;
					border-left: 2px solid #999999;
				}

				li:not(:last-of-type) {
					padding-right: 20px;
				}

				a {
					color: #999999;
				}
			}
		}

	}
}


@media screen and (max-width: 768px) {
	footer {
		font-size: 15px;
	}

	.footer-left {
		margin-top: 18px;
	}
	
	.footer-right {
		margin-top: 18px;
	}

}

@media screen and (min-width: 769px) {
	.footer-container {
		display: flex;
		justify-content: space-between;
		align-items: center;

		ul a {
			font-size: 16px;
		}
	}


}

/* ==============================
    contact-page
============================== */
.form-p-wrapper {
	width: 100%;
	text-align: center;
	font-size: 20px;
	padding-top: 50px;
	padding-bottom: 50px;
}

form {
	display: block;
	margin: 0 auto;
	width: 60%;
	background-color: #fff;


	dl {
		padding: 100px;
		text-align: left;

		dt {
			
			&:not(:first-of-type)  {
				margin-top: 30px;
			}

		}

		dd {
			margin-top: 8px;
			font-size: 15px;
		}

		input[type="checkbox"] {
			display: none;

			+label {
				padding-left: 20px;
				position: relative;;
			
				&::before {
					display: block;
					width: 12px;
					height: 12px;
					border-radius: 3px;
					border: 1px solid #0e536d;
					top:50%;
					left: 2px;
					transform: translateY(-43%);
				}

				&::after {
					width: 6px;
					height: 8px;
					border-right: 3px solid #fff;
					border-bottom: 3px solid #fff;
					top: 50%;
					left: 2px;
					transform: rotate(45deg) translate(-3px,-60%);
					opacity: 0;
				}
			}


			&+label::before,
			&+label::after {
				content: "";
				display: block;
				position: absolute;
				transition: .2s;
			}

			&:checked +label::before {
				background-color: #0e536d;
			}


			&:checked +label::after {
				opacity: 1;
			}
		}

	}

	#submit_button {
		display: flex;
		align-content: center;
		justify-content: space-between;
		font-size: 18px;
		letter-spacing: 0.12em;
		margin: 30px auto;
		padding: 15px 50px;
		border-style: none;
		cursor: pointer;
		transition: .3s;

		&:hover {
			background-color: #f6b7aa;
			color:#fff;
		}
	}

	textarea {
		display: inline-block;
		width: 80%;
		height: 200px;
		resize:vertical;
	}
}

