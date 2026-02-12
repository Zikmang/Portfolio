import adasheCircle from '../assets/adashe-create-circle.png'
import adashe from '../assets/adashe.png'
import cropScreen from "../assets/crop-companion.png"
import restDark from "../assets/rest-dark.png"
import restLight from "../assets/rest-api-mobile.png"
import comments from "../assets/desktop-design.jpg"
import commentsMobile from "../assets/interactive-mobile.png"
import adviceScreen from "../assets/advice-generator.jpg"
import adviceMobile from "../assets/advice-mobile.png"
import ticketResult from "../assets/ticket-result.png"
import mobileTicket from "../assets/mobile-ticket.png"
import cardForm from "../assets/active-state.png"
import cardMobile from '../assets/card-mobile.png'
import dessertGrid from "../assets/active-dessert.png"
import mobileDessert from "../assets/mobile-dessert.png"
import loopMobile from "../assets/loop-mobile.png"

import adasheMockup from "../assets/adashe-mockup.png"
import cropMockup from "../assets/crop-mockup.png"
import commentsMockup from "../assets/commets-mockup.png"
import restMockup from "../assets/rest-mockup.png"
import adviceMockup from "../assets/advice-generator.jpg"
import loopMockup from "../assets/loopstudio-mockup.png"
import ticketMockup from "../assets/ticket-mockup.png"
import cardMockup from "../assets/card-desktop.png"
import dessertMockup from "../assets/desserts-mockup.png"

export const projects = [
    {
      id: 1,
      title: "DIGITAL ADASHE (SAVINGS CIRCLES)",
      description: "A FinTech feature that digitizes traditional group savings (Adashe) into a transparent, state-driven user experience. ",
      date: "Ongoing",
      role: "Frontend Engineer",
      tools: ["React", "JavaScript", "Tailwind CSS"],
      context: "Product Case Study",
      imageUrl: adasheMockup,

      sections: {
      challenge: {
      title: "The Challenge",
      paragraphs: [
        "Informal group savings systems like Adashe are widely used, but they rely on manual tracking, social trust, and fragmented communication channels such as messaging apps. Participants often struggle to keep track of who has paid, who is next to receive a payout, and whether the group is progressing as expected.",
        "From a frontend perspective, the core challenge was how to represent complex group financial states—contributions, rotations, payouts, and defaults—in a way that is immediately understandable, reduces user anxiety, and minimizes the risk of misinterpretation or disputes."
      ]
      },

      solution: {
      title: "The Solution",
      paragraphs: [
        "The solution was to design an engineer-led, component-based UI for a Digital Adashe feature inside a FinTech application. Instead of focusing on visual branding, the interface was structured around state visibility, predictable behavior, and reusable components that map cleanly to system rules.",
        "The UI is driven entirely by group state and contribution data, using clear status indicators, progress tracking, and locked states to communicate what users can and cannot do at any moment. By prioritizing clarity over decoration, the design ensures that users can quickly understand the current cycle, contribution status, and upcoming payouts without additional explanation."
      ]
      }
      },

      gallery: [
      {
      id: 1,
      description: "Savings Circles dashboard showing active, paused, and completed groups with progress indicators",
      imageUrl: adasheCircle
      },
      {
      id: 2,
      description: "Savings Circle overview highlighting contribution progress, rotation order, and next payout",
      imageUrl: adashe
      }
      ],

      liveUrl: "#",
      codeUrl: 'https://github.com/Zikmang/Adashe-Digital-group-saving-'
    },

    {
      id: 2,
      title: "CROP COMPANION & LOCAL MARKETPLACE",
      description: "A web application that helps users discover companion crops and connect with nearby sellers. The platform blends farming knowledge with a marketplace experience tailored for local communities.",
      date: "Ongoing",
      role: "Frontend Engineer",
      tools: ["React", "JavaScript", "Tailwind CSS", "JSON"],
      context: "Product Case Study",
      imageUrl: cropMockup,
      sections: {
      challenge: {
      title: "The Challenge",
      paragraphs: [
        "Small-scale farmers and buyers often struggle to access clear, practical information about companion planting. Most existing resources are either too academic or disconnected from real-world purchasing needs, making it difficult for users to apply the knowledge directly.",
        "Additionally, users who discover a crop still face challenges finding nearby sellers. There is a gap between agricultural education platforms and local produce marketplaces, resulting in fragmented experiences and inefficiencies in local food distribution."
      ]
      },

      solution: {
      title: "The Solution",
      paragraphs: [
        "The solution was to design a component-driven web application that merges agricultural knowledge with a marketplace-ready architecture. Each crop is powered by structured JSON data, enabling scalable rendering of crop details and companion relationships.",
        "The interface prioritizes clarity and speed of discovery through card-based layouts, modal views for deeper exploration, and a clean typography system. A contextual “Buy” call-to-action allows users to move seamlessly from learning to purchasing."
      ]
      }
      },
      gallery: [
      {
      id: 1,
      description: "Crop library and discovery interface",
      imageUrl: cropScreen
      },
      {
      id: 2,
      description: "Crop modal displaying companion relationships",
      imageUrl: cropScreen
      }
      ],
      liveUrl: "#",
      codeUrl: 'https://github.com/Zikmang/Companion-Plant-Guide-web-page'
    },
    {
      id: 3,
      title: "REST COUNTRIES API",
      description: "A frontend application integrating with the REST Countries API. ",
      date: "2025",
      role: "Frontend Engineer",
      tools: ["React", "REST API", "Tailwind CSS", "Dark Mode Logic"],
      context: "Technical Challenge",
      imageUrl: restMockup,

      sections: {
      challenge: {
      title: "The Challenge",
      paragraphs: [
        "Handling large datasets from external APIs often results in performance bottlenecks and poor user experience if not managed correctly. The challenge was to build a robust interface that could fetch data for over 250 countries, render it efficiently, and allow users to filter by region or search by name in real-time without layout shifts.",
        "Additionally, implementing a system-aware color theme switcher (Dark/Light mode) required careful state management to ensure user preferences persisted across sessions and reloading."
      ]
      },

      solution: {
      title: "The Solution",
      paragraphs: [
        "I implemented a scalable architecture using React hooks for efficient data fetching and caching. To optimize performance, I utilized array filtering methods for the search functionality, ensuring immediate feedback as the user types.",
        "The UI uses a mobile-first approach with CSS variables (via Tailwind) to handle theming. This ensures that toggling between dark and light modes updates the entire application state instantly without page reloads, maintaining high accessibility standards throughout."
      ]
      }
      },

      gallery: [
      {
      id: 1,
      description: "Home view displaying the grid of countries with search and filter inputs",
      imageUrl: restDark
      },
      {
      id: 2,
      description: "Detailed country view showing border countries and flag data",
      imageUrl: restLight
      }
      ],

      liveUrl: "https://countries-api-rust-nu.vercel.app/",
      codeUrl: 'https://github.com/Zikmang/Countries-API'
    },

    {
      id: 4,
      title: "INTERACTIVE COMMENTS SECTION",
      description: "A CRUD (frontend based) interactive comments interface that manages nested data structures. ",
      date: "2025",
      role: "Frontend Engineer",
      tools: ["React", "JSON", "State Management", "Recursion"],
      context: "Frontend Challenge",
      imageUrl: commentsMockup,

      sections: {
      challenge: {
      title: "The Challenge",
      paragraphs: [
      "Managing nested comment threads (replies to replies) is a classic computer science problem that can easily lead to complex, unmanageable code in React. The main difficulty was creating a data structure that allows infinite nesting while keeping the UI flat and performant.",
      "Furthermore, managing the user state—ensuring users can only edit or delete their own comments, and calculating time stamps dynamically—added layers of complexity to the state logic."
      ]
      },

      solution: {
      title: "The Solution",
      paragraphs: [
      "I utilized a recursive component pattern to render the comment tree. This allows the application to handle any depth of replies without duplicating code. For state management, I treated the JSON data as a single source of truth, creating pure functions to handle insertions, edits, and deletions within the nested arrays.",
      "To improve perceived performance, I implemented optimistic UI updates, where the interface reflects the user's action (like posting a reply) immediately before the data is formally confirmed, creating a seamless conversational flow."
      ]
      }
      },

      gallery: [
      {
      id: 1,
      description: "Main discussion thread showing nested replies and user actions",
      imageUrl: comments
      },
      {
      id: 2,
      description: "Modal confirmation for deleting a comment",
      imageUrl: commentsMobile
      }
      ],

      liveUrl: "https://interactive-comment-section-six-chi.vercel.app/",
      codeUrl: 'https://github.com/Zikmang/Interactive-Comment-Section'
    },
    {
      id: 5,
      title: "ADVICE GENERATOR APP",
      description: "A fun API based advice generator. Get your daily dose of motivation",
      date: "2025",
      role: "Frontend Engineer",
      tools: ["React", "Fetch API", "CSS Grid", "Responsive Design"],
      context: "Mini-Project",
      imageUrl: adviceMockup,

      sections: {
      challenge: {
      title: "The Challenge",
      paragraphs: [
      "While simple on the surface, advice generators often suffer from poor UX due to layout jumps when text length changes. The challenge was to create a container that adapts smoothly to variable content lengths retrieved from an external API.",
      "Another key aspect was robust error handling. If the API fails or the network is down, the user needs to be informed gracefully rather than seeing a broken UI."
      ]
      },

      solution: {
      title: "The Solution",
      paragraphs: [
      "I built a centralized card component using CSS Grid to center content vertically and horizontally on any screen size. I implemented async/await syntax for cleaner promise handling, wrapping the fetch logic in a try/catch block to manage network errors.",
      "To enhance the experience, I added a throttle to the 'Generate' button, preventing users from spamming the API and ensuring that the animation cycle completes before a new request is sent."
      ]
      }
      },

      gallery: [
      {
      id: 1,
      description: "Desktop view of the advice card with glowing dice button",
      imageUrl: adviceScreen
      },
      {
      id: 2,
      description: "Mobile responsive view adapting to smaller viewports",
      imageUrl: adviceMobile
      }
      ],

      liveUrl: "https://advice-generator-api-three.vercel.app/",
      codeUrl: '#'
    },

    {
      id: 6, 
      title: "CONFERENCE TICKET GENERATOR",
      description: "A fully functional ticket generator with drag-and-drop image upload and real-time form validation.",
      date: "2025",
      role: "Frontend Engineer",
      tools: ["React", "Tailwind CSS", "Vite", "Regex Validation"],
      context: "Frontend Mentor Challenge",
      imageUrl: ticketMockup, 

      sections: {
        challenge: {
          title: "The Challenge",
          paragraphs: [
            "Building a form that feels 'alive' is difficult. The main challenge was implementing robust client-side validation for emails and file uploads (checking size and type) while providing immediate, non-intrusive feedback to the user.",
            "Another complexity was the image handling. I needed to allow users to upload an avatar via drag-and-drop or click, preview it instantly without a backend, and ensure it persisted if the component re-rendered."
          ]
        },

        solution: {
          title: "The Solution",
          paragraphs: [
            "I utilized React's state to manage controlled inputs, using Regex patterns to validate email formats and GitHub usernames in real-time. For the image upload, I used the File API and `URL.createObjectURL()` to generate temporary preview URLs, ensuring a lag-free experience.",
            "To make the generated ticket unique, I implemented a random ID generator and used CSS Grid to ensure the layout remains stable regardless of the length of the user's name or email."
          ]
        }
      },

      gallery: [
        {
          id: 1,
          description: "Clean form interface with active validation states",
          imageUrl: ticketResult 
        },
        {
          id: 2,
          description: "The generated ticket with the user's custom avatar",
          imageUrl: mobileTicket
        }
      ],

      liveUrl: "https://conference-ticket-generator-sooty-three.vercel.app/" ,
      codeUrl: '#'
    },

    {
      id: 7, 
      title: "DESSERTS E-COMMERCE",
      description: "A functional shopping cart application featuring product selection, quantity management, and order calculation.",
      date: "2025",
      role: "Frontend Engineer",
      tools: ["React", "Tailwind CSS", "CRUD Logic", "JSON"],
      context: "Frontend Mentor Challenge",
      imageUrl: dessertMockup, 

      sections: {
        challenge: {
          title: "The Challenge",
          paragraphs: [
            "The core challenge of any e-commerce site is State Management. I needed to ensure that the state of the 'Add to Cart' buttons in the product grid stayed perfectly synced with the actual data in the cart array.",
            "Another complexity was handling the layout shift. The cart needs to be easily accessible on mobile (often sticky or at the bottom) while sitting comfortably as a sidebar on desktop screens."
          ]
        },

        solution: {
          title: "The Solution",
          paragraphs: [
            "I structured the state as an array of objects. When a user interacts with a product, I check if the item ID already exists in the cart. If it does, I update the quantity property; if not, I push a new object. This keeps the data structure flat and manageable.",
            "For the UI, I utilized standard CSS Grid for the product layout and Flexbox for the cart. I implemented custom media queries to handle the responsiveness, seamlessly switching from a single-column mobile view to a split-screen layout on larger desktop displays."
          ]
        }
      },

      gallery: [
        {
          id: 1,
          description: "Responsive grid layout displaying product data",
          imageUrl: dessertGrid 
        },
        {
          id: 2,
          description: "Cart summary and order confirmation modal",
          imageUrl: mobileDessert 
        }
      ],

      liveUrl: "https://your-live-link-here.com",
      codeUrl: '#'
    },

    {
      id: 8, 
      title: "INTERACTIVE CARD DETAILS",
      description: "A real-time credit card form that visualizes data as users type, featuring complex input masking and validation.",
      date: "2025",
      role: "Frontend Engineer",
      tools: ["React", "Tailwind CSS", "Regex", "State Management"],
      context: "Frontend Mentor Challenge",
      imageUrl: cardMockup, 

      sections: {
        challenge: {
          title: "The Challenge",
          paragraphs: [
            "Forms are often the most frustrating part of the web. The challenge here was to create a 'delightful' data entry experience. The most difficult technical aspect was Input Masking—formatting the credit card number (0000 0000 0000 0000) in real-time without breaking the user's cursor position or delete functionality.",
            "Additionally, syncing the visual card representation with the form inputs required careful state management to ensure no lag or data mismatch occurred."
          ]
        },

        solution: {
          title: "The Solution",
          paragraphs: [
            "I implemented custom Regex patterns to handle the input masking. Instead of using a heavy library, I wrote a lightweight utility function that strips whitespace and reapplies it after every fourth digit.",
            "For the layout, I used absolute positioning within a relative container to place the text on the credit card images perfectly, ensuring they scale correctly whether on a mobile screen or a wide desktop monitor."
          ]
        }
      },

      gallery: [
        {
          id: 1,
          description: "Active form state with real-time updates",
          imageUrl: cardForm 
        },
        {
          id: 2,
          description: "Success state after valid submission",
          imageUrl: cardMobile 
        }
      ],

      liveUrl: "https://interactive-card-main-form.vercel.app/",
      codeUrl: '#'
    },
    {
      id: 9,
      title: "LOOPSTUDIOS LANDING PAGE",
      description: "A responsive, immersive landing page for a VR company featuring complex grid layouts and interactive hover states.",
      date: "2025",
      role: "Frontend Developer",
      tools: ["React", "Tailwind CSS", "CSS Grid", "Responsive Design"],
      context: "Frontend Mentor Challenge",
      imageUrl: loopMockup, 
      
      sections: {
        challenge: {
          title: "The Challenge",
          paragraphs: [
            "The primary design challenge was the 'Creations' gallery, which requires a layout shift. On mobile, it's a single column with landscape images; on desktop, it transforms into a four-column grid with portrait images. Managing these aspect ratios and source swaps without layout shifts was critical.",
            "Additionally, the site relies heavily on hover effects (overlay gradients and text transitions) that needed to feel smooth and performant across different devices."
          ]
        },

        solution: {
          title: "The Solution",
          paragraphs: [
            "I utilized CSS Grid for the gallery layout, which allowed me to easily rearrange the items based on viewport width. For the images, I implemented the HTML `<picture>` element (or responsive utility classes) to serve different image files for mobile and desktop, improving both performance and art direction.",
            "For the navigation, I built a custom hamburger menu that triggers a full-screen overlay on mobile, using state management to lock the body scroll when the menu is active.",
            "I used React to build the components, I added motion to the div."
          ]
        }
      },

      gallery: [
        {
          id: 1,
          description: "Desktop grid view with hover interactions",
          imageUrl: loopMockup 
        },
        {
          id: 2,
          description: "Mobile responsive view with stacked layout",
          imageUrl: loopMobile 
        }
      ],

      liveUrl: "https://loopstudio-landing-page-8x46.vercel.app/"
    },
  ];