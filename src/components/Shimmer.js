const Shimmer = () => {
    return (
    <div className="shimmer-parent">
        {Array(20).fill(" ").map((x , index) => <div key={index} className="shimmer"></div>)}
    </div>
    )
}

export default Shimmer;