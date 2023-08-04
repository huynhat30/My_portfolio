import './index.scss'

const AnimatedLetter = ({ letterClass, strArray, index }) => {
    return (
        <span>
            {strArray.map((char, i) => {
                return (
                    <span key={char + i} className={`${letterClass} _${i + index}`}>
                        {char}
                    </span>
                )
            })}
        </span>
    )
}

export default AnimatedLetter