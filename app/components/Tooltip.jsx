import * as React from 'react';
import PropTypes from 'prop-types';
import Hover from './Hover';

const container = {
    position: 'relative',
    display: 'flex'
};

export default function ToolTip({ children, element }) {
    return (
        <Hover>
            {(hovering) => {
                return (
                    <div style={container}>
                        {hovering === true && element}
                        {children}
                    </div>
                );
            }}
        </Hover>
    );
}

ToolTip.propTypes = {
    children: PropTypes.node.isRequired,
    element: PropTypes.node.isRequired
};
