/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Inputbox from '../input/index';
import './style.scss';

function ColumnInput(props) {
  return (
    <div className="column">
      <Inputbox
        type="text"
        required
        value={props.value.name}
        disabled={false}
        handleChange={(e) =>
          props.setValue({
            0: props.value[0],
            1: props.value[1],
            2: props.value[2],
            3: props.value[3],
            name: e.target.value,
          })
        }
        check={props.isWinner}
      />
      <Inputbox
        type="phonenumber"
        required
        disabled={false}
        value={props.value[0]}
        handleChange={(e) =>
          props.setValue({
            0: Number(e.target.value) || '',
            1: props.value[1],
            2: props.value[2],
            3: props.value[3],
            name: props.value.name,
          })
        }
        check={props.isWinner}
      />
      <Inputbox
        type="phonenumber"
        required
        disabled={false}
        value={props.value[1]}
        handleChange={(e) =>
          props.setValue({
            0: props.value[0],
            1: Number(e.target.value) || '',
            2: props.value[2],
            3: props.value[3],
            name: props.value.name,
          })
        }
        check={props.isWinner}
      />
      <Inputbox
        disabled
        value={
          props.value[0] !== '' && props.value[1] !== ''
            ? Number(props.value[0] || '') + Number(props.value[1] || '') || ''
            : ''
        }
        check={props.isWinner}
      />
      <Inputbox
        type="phonenumber"
        required
        disabled={false}
        value={props.value[2]}
        handleChange={(e) =>
          props.setValue({
            0: props.value[0],
            1: props.value[1],
            2: Number(e.target.value) || '',
            3: props.value[3],
            name: props.value.name,
          })
        }
        check={props.isWinner}
      />
      <Inputbox
        disabled
        value={
          props.value[0] !== '' && props.value[1] !== '' && props.value[2] !== ''
            ? Number(props.value[0] || '') +
              Number(props.value[1] || '') +
              Number(props.value[2] || '')
            : ''
        }
        check={props.isWinner}
      />
      <Inputbox
        type="phonenumber"
        required
        disabled={false}
        value={props.value[3]}
        handleChange={(e) =>
          props.setValue({
            0: props.value[0],
            1: props.value[1],
            2: props.value[2],
            3: Number(e.target.value) || '',
            name: props.value.name,
          })
        }
        check={props.isWinner}
      />
      <Inputbox
        disabled
        value={
          props.value[0] !== '' &&
          props.value[1] !== '' &&
          props.value[2] !== '' &&
          props.value[3] !== ''
            ? Number(props.value[0] || '') +
              Number(props.value[1] || '') +
              Number(props.value[2] || '') +
              Number(props.value[3] || '')
            : ''
        }
        check={props.isWinner}
      />
    </div>
  );
}

export default ColumnInput;
