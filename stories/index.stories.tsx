import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Button } from '@tampmd/bth-react-components';
import '../scss/style.scss';


storiesOf("Button", module)
    .add("Button header", () => (
        <Button label="Test" onClick={() => {console.log('Clicked')}}/>
    ));

