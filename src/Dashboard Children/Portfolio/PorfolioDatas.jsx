
const PorfolioDatas = ({portfolio, handleDelete}) => {


    const {portfolioName, portfolioDescription, portfolioNotes,portfolioClientName, portfolioImage,completionDate, projectCategory, portfolioLink, portfolioOwnerName, technologiesUsed, _id} = portfolio;
    
    return (
        <div>
            <div className="card w-112 bg-base-100 shadow-xl">
                <figure><img src={portfolioImage} alt="Portfolio Image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{portfolioName}</h2>
                    <p>{portfolioDescription}</p>
                    <p>{portfolioOwnerName}</p>
                    <p>{technologiesUsed}</p>
                    <p>{projectCategory}</p>
                    <p>{completionDate}</p>
                    <p>{portfolioClientName}</p>
                    <p>{portfolioNotes}</p>
                    <div className="flex justify-between items-center">
                    <div className="card-actions justify-end">
                        <a href={portfolioLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Site</a>
                    </div>
                    <div>
                        <button onClick={()=>handleDelete(_id)} className="btn bg-red-500 text-white">Delete PORTFOLIO</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PorfolioDatas;