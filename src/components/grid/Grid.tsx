import React from 'react';

type GridProps<T> = {
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
};

const Grid = <T,>({ items, renderItem }: GridProps<T>): JSX.Element => {
    return (
        <div className="grid-container">
            {items.map((item, index) => (
                <div className="grid-item" key={index}>
                    {renderItem(item, index)}
                </div>
            ))}
        </div>
    );
};

export default Grid;
