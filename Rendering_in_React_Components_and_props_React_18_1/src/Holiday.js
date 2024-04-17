import React from "react";

function Holiday(props) {
    const { name, day, month } = props;

    return (
        <div>
            {name}: {month} {day}
        </div>
    )
}

export default Holiday;
