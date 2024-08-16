import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="image_display" class="container-fluid text-center overflow-auto p-5 pt-5 min-vh-100">
    <div class="container">
          <div class="max-w-xl mx-auto my-10 bg-white p-5 rounded">
            <div class="text-center">
              <h1 class="my-3 display-4 font-weight-semibold text-gray-700">
                Contact Me
              </h1>
              <p class="text-gray-400">
                Fill up the form below to send a message.
              </p>
            </div>
            <div class="m-7">
              <form action="https://api.web3forms.com/submit" method="POST" id="form" class="needs-validation" novalidate>
                <input type="hidden" name="access_key" value="f400a41d-25bc-4062-862a-860fe795c90c" />
                <input type="hidden" name="subject" value="New Submission from Web3Forms" />
                <input type="checkbox" name="botcheck" id="checkbox" />
      
                <div class="mb-4">
                  <div class="row">
                    <div class="col-md-6">
                      <label for="fname" class="form-label">First Name</label>
                      <input type="text" name="name" id="first_name" placeholder="John" required class="form-control" />
                      <div class="invalid-feedback text-danger">
                        Please provide your first name.
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label for="lname" class="form-label">Last Name</label>
                      <input type="text" name="last_name" id="lname" placeholder="Doe" required class="form-control" />
                      <div class="invalid-feedback text-danger">
                        Please provide your last name.
                      </div>
                    </div>
                  </div>
                </div>
      
                <div class="mb-4">
                  <div class="row">
                    <div class="col-md-6">
                      <label for="email" class="form-label">Email Address</label>
                      <input type="email" name="email" id="email" placeholder="you@company.com" required class="form-control" />
                      <div class="invalid-feedback text-danger">
                        Please provide your email address.
                      </div>
                      <div class="invalid-feedback text-danger">
                        Please provide a valid email address.
                      </div>
                    </div>
      
                    <div class="col-md-6">
                      <label for="phone" class="form-label">Phone Number</label>
                      <input type="text" name="phone" id="phone" placeholder="+1 (555) 1234-567" required class="form-control" />
      
                      <div class="invalid-feedback text-danger">
                        Please provide your phone number.
                      </div>
                    </div>
                  </div>
                </div>
      
                <div class="mb-4">
                  <label for="message" class="form-label">Your Message</label>
      
                  <textarea rows="5" name="message" id="message" placeholder="Your Message" class="form-control" required></textarea>
                  <div class="invalid-feedback text-danger">
                    Please enter your message.
                  </div>
                </div>
                <div class="mb-4">
                  <button type="submit" class="btn btn-primary w-100">
                    Send Message
                  </button>
                </div>
                <p class="text-center text-gray-400" id="result"></p>
              </form>
            </div>
          </div>
        </div>
  </div>
  );
}

export default Contact;
