import './description.scss'
import tag from '../../assets/tag.svg'

const Description = ({ title, descValue }) => {
    return (
        <div className='description'>
            <div className='PlayQuiz'>
                <h1 className='descTitle'>{title}</h1>

                <div className='description-container'>
                    {

                        descValue?.map((line) => {
                            return (
                                <div className='description-line'>
                                    <div className='description-img'>
                                        <img src={tag} width={"25px"} alt="" />
                                    </div>

                                    <h2 style={{ fontSize: "14px", fontWeight: "normal" }}>{`${line?.line}`}</h2>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Description;