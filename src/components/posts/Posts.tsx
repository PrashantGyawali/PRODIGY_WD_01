import Post from "../Post/Post"
import "./Posts.css"

export default function Posts() {
  const posts = [
    {
      title: "How To Focus as a Developer in an Everchanging Tech World? An Expert's Guide to Staying Motivated.",
      description: `Every hour a new framework is released, every day a new language is released, every week a new library is released, every month a new tool is released. The tech world is changing at a rapid pace. All this can be overwhelming for a developer. I am a developer myself and I have been through this. I have been through the phase yet I have managed to stay motivated and focused. In this article I will share my experience and tips on how to stay motivated and focused as a developer.`,
      date: "1 hour ago",
      categories: ["Tech", "Business", "FreeLancing", "Programming"],
      image: "https://www.phoenix.edu/content/dam/edu/blog/2023/02/Male-programmer-writing-code-in-modern-office-704x421.jpg"
    },
    {
      title: "The Art of Efficient Coding: Tips and Tricks for Writing Clean and Maintainable Code.",
      description: `Coding is not just about making the computer understand; it's also about making your fellow developers understand. In this comprehensive blog post, we delve into the intricacies of efficient coding. We'll explore various tips and tricks aimed at writing code that is not only clean and maintainable but also stands the test of time. Discover the art of crafting code that communicates its intent effectively. It may not be noticeable in the beginning but it will pay off in the long run.`,
      date: "2 hours ago",
      categories: ["Programming", "Coding Practices"],
      image: "https://blog.sigplan.org/wp-content/uploads/2021/11/software-engineering-end.png"
    },
    {
      title: "Navigating the World of Remote Work: A Comprehensive Guide for Freelancers.",
      description: `With the rise of remote work, freelancers are embracing the flexibility it offers. In this extensive guide, freelancers will find valuable insights and tips on navigating the world of remote work. From finding gigs to staying productive, this guide covers it all. Discover the keys to success in the ever-evolving landscape of freelancing and remote work.`,
      date: "3 hours ago",
      categories: ["FreeLancing", "Remote Work", "Business"],
      image: "https://www.nyit.edu/files/human_resources/HR_WorkingRemotely_Hero_v02.jpg"
    },
    {
      title: "Breaking Down the Latest JavaScript Framework: A Deep Dive into Solid JS Framework.",
      description: `Stay up-to-date with the latest JavaScript framework, XYZ Framework. In this in-depth exploration, we break down the features, advantages, and use cases of Solid Js Framework. Developers will gain a thorough understanding of this powerful tool for web development. Dive into the details and harness the full potential of XYZ Framework for your projects.`,
      date: "4 hours ago",
      categories: ["Tech", "Programming", "JavaScript"],
      image: "https://repository-images.githubusercontent.com/130884470/ad63fd00-7ab2-11ea-9c57-6c114391183a"
    },
    {
      title: "Mastering Time Management for Developers: Boost Your Productivity with These Proven Strategies.",
      description: `Effective time management is crucial for developers juggling multiple tasks and deadlines. This blog post shares proven strategies to help developers master time management, increase productivity, and achieve a healthy work-life balance. Discover actionable tips to optimize your workflow and make the most out of your development journey.`,
      date: "5 hours ago",
      categories: ["Productivity", "Development", "Time Management"],
      image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Proven_Time_Management_Tips_and_Strategies_for_students.jpg"
    },
    {
      title: "Unlocking Creativity: How to Overcome Creative Blocks and Spark Innovation.",
      description: `Creativity is at the heart of innovation, but creative blocks can hinder progress. In this extensive exploration, we dive into effective strategies to overcome creative blocks, boost inspiration, and foster a culture of innovation. Unleash your creative potential and contribute to groundbreaking projects with renewed inspiration.`,
      date: "6 hours ago",
      categories: ["Creativity", "Innovation", "Productivity"],
      image: "https://www.imd.org/wp-content/uploads/2023/07/innov1-e1691507152764.gif"
    },
    {
      title: "Demystifying Machine Learning: A Beginner's Guide to Understanding ML Concepts.",
      description: `Machine learning is a powerful technology that fuels various applications. This beginner-friendly guide demystifies machine learning concepts, providing readers with a solid foundation to explore and understand this exciting field.`,
      date: "7 hours ago",
      categories: ["Tech", "Machine Learning", "Data Science"],
      image: "https://img.freepik.com/premium-photo/ai-machine-learning-modern-computer-technologies-concept-with-retro-effect-digital-micro-circuit-human-brain-silhouette-connected-motherboard-dark-background-3d-rendering_670147-10747.jpg"
    },
    {
      title: "Navigating the Cloud: Best Practices for Cloud Computing in Modern Businesses.",
      description: `Cloud computing has transformed the way businesses operate. This blog post explores best practices for navigating the cloud, including security measures, cost optimization, and choosing the right cloud services for your business needs.`,
      date: "8 hours ago",
      categories: ["Cloud Computing", "Business", "Technology"],
      image: "data:image/jpeg;base64,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"
    },
    {
      title: "The Power of Networking: Building Meaningful Connections in the Tech Industry.",
      description: `Networking is a key factor in career success, especially in the tech industry. Learn the art of building meaningful connections, whether through conferences, online platforms, or community involvement, and advance your career in tech.`,
      date: "9 hours ago",
      categories: ["Networking", "Career", "Tech Industry"],
      image: "https://img.freepik.com/premium-photo/networking-handshake-two-professionals-suits_118124-48126.jpg"
    },
    {
      title: "Exploring the Future of Web Development: Trends and Technologies to Watch.",
      description: `Web development is a dynamic field with constant evolution. Stay ahead of the curve by exploring the future of web development. This blog post discusses emerging trends and technologies that will shape the future of web development.`,
      date: "10 hours ago",
      categories: ["Web Development", "Technology", "Programming"],
      image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGFyayUyMGNvZGV8ZW58MHx8MHx8fDA%3D"
    }
  
  ]
  return (
    <>
      <div className='posts'>
      <div className="postsHeading">
        <h2>Recent Blogs</h2>
      </div>
        {posts.map((post, index) => <Post key={index} title={post.title} description={post.description} date={post.date} categories={post.categories} image={post.image} />)}
      </div>
    </>
  )
}
