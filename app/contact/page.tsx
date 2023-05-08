"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
	const [state, handleSubmit] = useForm("xqkonjbg");
	if (state.succeeded) {
		return (
			<p className="h-screen w-full flex felx-col items-center justify-center text-4xl font-sans">
				Thanks for reaching out!
			</p>
		);
	}
	return (
		<div className="flex flex-col items-center">
			<h1 className="font-sans text-4xl text-center mt-20">
				Contact
			</h1>
			<form
				onSubmit={handleSubmit}
				className="w-full mb-20 mt-20 max-w-lg mx-auto py-8 px-4">
				<input
					id="name"
					type="name"
					name="name"
					placeholder="Your name"
					className="shadow appearance-none border-2 border-teal-700 rounded w-full py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
				<input
					id="email"
					type="email"
					name="email"
					placeholder="Your email address"
					className="shadow appearance-none border-2 border-teal-700 rounded w-full py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
				<ValidationError
					prefix="Email"
					field="email"
					errors={state.errors}
					className="text-red-500 text-xs mt-1"
				/>
				<textarea
					id="message"
					name="message"
					placeholder="Send me your question..."
					className="shadow appearance-none border-2 border-teal-700 rounded w-full py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48 resize-none"
				/>
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
					className="text-red-500 text-xs mt-1"
				/>
				<button
					type="submit"
					disabled={state.submitting}
					className="bg-teal-800 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline">
					Submit
				</button>
			</form>
		</div>
	);
}
