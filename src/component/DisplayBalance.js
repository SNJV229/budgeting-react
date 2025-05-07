import React from 'react';
import { Header, Statistic } from 'semantic-ui-react';

function DisplayBalance({ title, value, color='black', size='small' }) {
    return (
        <Statistic size={size} color={color}>
            <Statistic.Label>{title}</Statistic.Label>
            <Statistic.Value>{value}</Statistic.Value>
        </Statistic>
    );
}
export default DisplayBalance;