import {
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export const contentTemplates = [
  {
    name: "Youtube Video Description",
    desc: "An AI tool that generate youtube video description from your information,Generates human-friendly text, output in Chinese",
    category: "All,Media",
    icon: FaYoutube,
    aiPrompt:
      "Give me youtube video description Ideas based on given video description outline and title",
    slug: "youtube-description",
    form: [
      {
        label: "Youtube Video Description Title",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter Video Description Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Video Idea",
    desc: "An AI tool that generate Youtube Video Idea based on given information,Generates human-friendly text, output in Chinese",
    category: "All,Meida",
    icon: FaYoutube,
    aiPrompt:
      "Give me youtube video idea on given video niche & outline topic",
    slug: "generate-youtube-video-idea",
    form: [
      {
        label: "Enter your video niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter video outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Instagram Hashtags",
    desc: "An AI tool that generate Instagram hashtags based on your post niche and outline information,Generates human-friendly text, output in Chinese",
    category: "All,Media",
    icon: FaInstagram,
    aiPrompt:
      "Give me some good examples of instagram hashtags on given niche & outline topic",
    slug: "generate-instagram-hashtags",
    form: [
      {
        label: "Enter your post niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter post outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Tiktok Hashtags",
    desc: "An AI tool that generate Tiktok topic idea based on your post niche and outline information,Generates human-friendly text, output in Chinese",
    category: "All,Meida",
    icon: FaTiktok,
    aiPrompt:
      "Give me some good examples of instagram hashtags on given niche & outline topic",
    slug: "generate-tiktok-hashtags",
    form: [
      {
        label: "Enter your post niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter post outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Linkedin Post",
    desc: "An AI tool that generate Linkedin Post idea based on your post niche and outline information,Generates human-friendly text, output in Chinese",
    category: "All,Work",
    icon: FaLinkedin,
    aiPrompt:
      "Give me some good examples of Linkedin Post idea on given niche & outline topic",
    slug: "generate-likedin-post",
    form: [
      {
        label: "Enter your post niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter post outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Tweet",
    desc: "An AI tool that generate Tweet Post idea based on your post niche and outline information,Generates human-friendly text, output in Chinese",
    category: "All,Work,Media",
    icon: FaTwitter,
    aiPrompt:
      "Give me 280 characters of tweet example on given niche & outline topic",
    slug: "generate-tweet-post",
    form: [
      {
        label: "Enter your tweet niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter tweet outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
];

export const upgradePlans = [
  {
    name:"$10",
    description:"Purchaes 10000 words in one-click.",
    func1:"10,000 words/purchaes",
    func2:"3 Template Access",
    func3:"Retain 7 days History"
  },
  {
    name:"$25",
    description:"Purchaes 10000 words in one-click.",
    func1:"100,000 words/purchaes",
    func2:"10 Template Access",
    func3:"Retain 30 days History"
  },
  {
    name:"$49",
    description:"No Limited words to use",
    func1:"No Limited",
    func2:"Support custom Template",
    func3:"Retain All History"
  },
]
