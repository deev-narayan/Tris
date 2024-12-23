import "./trend.css";

export default  function Trend({traderank,firsttag,secondtag,firsttaguse,secondtaguse}) {
    return (
        <div id="contain">
            <p id="rank">
                Trending Rank:: {traderank}
            </p>
            <p id="pa">#{firsttag}</p>
            <p id="count">{firsttaguse}</p>
            <br />
            <p id="pa">#{secondtag}</p>
            <p id="count">{secondtaguse}</p>
            <br />
            <hr />
        </div>
    )
}