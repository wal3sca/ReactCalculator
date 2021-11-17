const Buttons = (props) => {
  return (
    <div className="buttons">
      <button value="AC" onClick={props.handleOperator}>
        AC
      </button>
      <button value="+/-" onClick={props.handleOperator}>
        +/-
      </button>
      <button value="%" onClick={props.handleOperator}>
        %
      </button>
      <button value="÷" onClick={props.handleOperator}>
        ÷
      </button>
      <button value="9" onClick={props.handleNumber}>
        9
      </button>
      <button value="8" onClick={props.handleNumber}>
        8
      </button>
      <button value="7" onClick={props.handleNumber}>
        7
      </button>
      <button value="*" onClick={props.handleOperator}>
        *
      </button>
      <button value="6" onClick={props.handleNumber}>
        6
      </button>
      <button value="5" onClick={props.handleNumber}>
        5
      </button>
      <button value="4" onClick={props.handleNumber}>
        4
      </button>
      <button value="-" onClick={props.handleOperator}>
        -
      </button>
      <button value="3" onClick={props.handleNumber}>
        3
      </button>
      <button value="2" onClick={props.handleNumber}>
        2
      </button>
      <button value="1" onClick={props.handleNumber}>
        1
      </button>
      <button value="+" onClick={props.handleOperator}>
        +
      </button>
      <button value="0" onClick={props.handleNumber}>
        0
      </button>

      <button value="." onClick={props.handleOperator}>
        .
      </button>
      <button value="=" onClick={props.handleOperator}>
        =
      </button>
    </div>
  );
};
export default Buttons;
