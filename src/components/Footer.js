import React, { useState } from "react";
import { Link } from "gatsby";
import { css } from "@emotion/react";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import {
  FiTwitter,
  FiFacebook,
  FiLinkedin,
  FiInstagram,
  FiGithub,
} from "react-icons/fi";
import { Button, FormControl, FormLabel, OutlinedInput } from "@mui/material";
import axios from "axios";

const initialState = {
  email: "samwize.inc@gmail.com",
  subject: "Project Support",
  message: "",
};

function Footer() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChange = ({ target }) => {
    setForm((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const onSubmit = () => {
    const request = axios.post(
      "https://portfolio-nodemail.herokuapp.com/mails",
      form
    );
    setLoading(true);
    setMessage("sending...");
    request
      .then((response) => {
        console.log(response);
        setLoading(false);
        setMessage("sent");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setMessage("");
      });
    setForm(initialState);
  };

  return (
    <footer className="py-12 border-t-4 border-purple-800 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 sm:gap-x-10 gap-x-0 gap-y-4">
          <div className="sm:col-span-3 col-span-12">
            <div className="flex items-center space-x-2 text-gray-100 uppercase font-bold sm:mb-4 mb-2">
              <span className="lg:inline-flex">Résumé</span>
            </div>
            <div className="text-gray-200 leading-6">
              <p className="">
                The frontend developer with panache. I am big on deep learning.
                <br />I enjoy training people, and I am an advocate of best
                practices. If we can do it, we might as well, do it well.
              </p>
            </div>
          </div>
          <div className="sm:col-span-2 col-span-6">
            <h3 className="text-gray-100 uppercase font-bold sm:mb-4 mb-2">
              Links
            </h3>
            <ul className="leading-6">
              <li>
                <Link to="/" className="text-purple-400 hover:text-purple-500">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-purple-400 hover:text-purple-500"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/articles"
                  className="text-purple-400 hover:text-purple-500"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  to="/tools"
                  className="text-purple-400 hover:text-purple-500"
                >
                  Tools
                </Link>
              </li>
              <li>
                <a
                  href="https://linktr.ee/samuelokeke"
                  className="text-purple-400 hover:text-purple-500"
                >
                  Linktree
                </a>
              </li>
              <li>
                <Link
                  to="/request"
                  className="text-purple-400 hover:text-purple-500"
                >
                  Drop a request
                </Link>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-2 col-span-6 sm:block hidden">
            <h3 className="text-gray-100 uppercase font-bold sm:mb-4 mb-2">
              Socials
            </h3>
            <ul className="text-purple-400 leading-6">
              <li>
                <a
                  href="https://github.com/samwizzy"
                  className="text-purple-400 hover:text-purple-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>

              <li>
                <a
                  href="https://linkedin.com/in/samuel-okeke"
                  className="text-purple-400 hover:text-purple-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/samwize.o/"
                  className="text-purple-400 hover:text-purple-500"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/sampedia"
                  className="text-purple-400 hover:text-purple-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/okekesamwize"
                  className="text-purple-400 hover:text-purple-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/okekesamwize"
                  className="text-purple-400 hover:text-purple-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  Slack
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-2 col-span-6">
            <h3 className="text-gray-100 uppercase font-bold sm:mb-4 mb-2">
              Contact
            </h3>
            <div className="text-gray-200 leading-6">
              <Stack
                direction={{ sm: "column", xs: "column" }}
                spacing={{ sm: 1 }}
              >
                <div>
                  <figure>
                    <span className="text-sm">07068962708</span>
                    <figcaption className="text-sm text-purple-400 uppercase font-bold">
                      Mobile
                    </figcaption>
                  </figure>
                </div>
                <div>
                  <figure>
                    <span className="text-sm">09071142337</span>
                    <figcaption className="text-sm text-purple-400 uppercase font-bold">
                      Contact
                    </figcaption>
                  </figure>
                </div>
                <div>
                  <figure>
                    <span className="text-sm">samwize.inc@gmail.com</span>
                    <figcaption className="text-sm text-purple-400 uppercase font-bold">
                      Email
                    </figcaption>
                  </figure>
                </div>
                <div>
                  <figure>
                    <figcaption className="text-sm uppercase font-bold">
                      <a
                        href="https://wa.link/9m2ero"
                        target="_blank"
                        rel="noreferrer"
                        className="text-green-300"
                      >
                        WhatsApp me
                      </a>
                    </figcaption>
                  </figure>
                </div>
              </Stack>
            </div>
          </div>
          <div className="sm:col-span-3 col-span-12">
            <h3 className="text-gray-100 uppercase font-bold mb-4">
              Drop a message
            </h3>

            <Stack direction="column" spacing="1" alignItems="flex-start">
              <FormControl variant="outlined" fullWidth css={formControl}>
                <FormLabel sx={{ mb: 1 }}>Message</FormLabel>
                <OutlinedInput
                  placeholder="Hi, lets have a chat"
                  multiline
                  rows="2"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                />
              </FormControl>
              <div className="flex items-center space-x-2">
                <Button
                  type="submit"
                  variant="outlined"
                  color="primary"
                  onClick={onSubmit}
                  endIcon={loading && <CircularProgress size={16} />}
                >
                  Send
                </Button>
                <span className="text-purple-400 text-sm">{message}</span>
              </div>
            </Stack>
          </div>
        </div>

        <hr className="h-1 border-t border-gray-800 my-8" />

        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://facebook.com/okekesamwize"
            target="_blank"
            rel="noreferrer"
          >
            <FiFacebook size={24} className="text-purple-500" />
          </a>
          <a
            href="https://twitter.com/sampedia"
            target="_blank"
            rel="noreferrer"
          >
            <FiTwitter size={24} className="text-purple-500" />
          </a>
          <a
            href="https://linkedin.com/in/samuel-okeke"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin size={24} className="text-purple-500" />
          </a>
          <a
            href="https://instagram.com/samwize.o/"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram size={24} className="text-purple-500" />
          </a>
          <a
            href="https://github.com/samwizzy"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub size={24} className="text-purple-500" />
          </a>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="logo mb-2" />
          <div>
            <h1 className="text-3xl font-black text-gray-300">
              SAMUEL C. OKEKE
            </h1>
          </div>
          <div className="text-gray-500">
            <p>
              Copyright © {new Date().getFullYear()} Snr. Software developer.
            </p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

const formControl = css`
  margin-bottom: 0.5rem;
  & .MuiFormLabel-root {
    line-height: 1.25rem;
    color: #c084fc;
  }
  & .MuiOutlinedInput-input {
    color: #fff;
  }
  & .MuiOutlinedInput-notchedOutline {
    border: 1px solid #c084fc;
  }
  & .MuiOutlinedInput-input {
    ::placeholder {
      line-height: 1.25rem;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
  }
`;

export default Footer;
