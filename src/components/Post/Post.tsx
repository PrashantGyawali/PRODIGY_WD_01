import "./Post.css"
interface Props {
    title: string;
    description: string;
    date: string;
    categories: string[];
    image: string;
}

export default function Post(props: Props) {
    const newProps: Props = {
        title: props.title || "How To focus as a developer in everchanging tech World? An experts guide to staying motivated.",
        description: props.description || `Every hour a new framework is released, every day a new language is released, every week a new library is released, every month a new tool is released. The texh world is changing at a rapid pace. All this can be overwhelming for a developer. I am a developer myself and I have been through this. I have been through the phase yet I have managed to stay motivated and focused. In this article I will share my experience and tips on how to stay motivated and focused as a developer.`,
        date: props.date || "1 hour ago",
        categories: props.categories || ["Tech", "Business", "FreeLancing", "Programming"],
        image: props.image || "https://www.mooc.org/hs-fs/hubfs/learn-programming-career-jpg.jpeg?width=500&name=learn-programming-career-jpg.jpeg"
    };

    console.log(newProps);
    return (
        <div className="post">
            <div className="postImageDiv">
                <img src={newProps.image} alt="Blog image" className="postImage" />
            </div>
            <div className="postInfo">

                <div className="postTitle">
                    {newProps.title}
                </div>
                <div className="description ">
                    <div className="descriptionOverlay"></div>
                    {newProps.description}
                </div>
                <div className="postCategories">
                    {newProps.categories.map((category, index) => <span className="category"> {category}{index !== (newProps.categories.length - 1) && ","}</span>)}

                </div>
                <div className="date">
                    {newProps.date}
                </div>
            </div>
        </div>
    )
}
