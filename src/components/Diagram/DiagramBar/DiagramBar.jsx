import React from 'react';
import "./DiagramBar.css";

const DiagramBar = (props) => {
    // Начальное значение для показа процента трат за месяц, по умолчанию 0
    let barFillHeight = "0%";

    // Если максимальное значение больше 0
    if (props.maxValue > 0) {
        // То вычисляем процент траты
        barFillHeight = Math.round(props.value / props.maxValue * 100) + "%";
    }
    return (
        <div className="diagram-bar">
            <div className="diagram-bar__inner">
                {/* Для показа процента трат за месяц, применяем процент траты как высоту столбца */}
                <div className="diagram-bar__fill" style={{ height: barFillHeight }}></div>
            </div>
            <div className="diagram-bar__label">{props.label}</div>
        </div>
    );
};

export default DiagramBar;
