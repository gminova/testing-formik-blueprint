import React from "react";
import "./App.css";
import { NumericInput, TextArea, InputGroup } from "formik-blueprint";
import { Form, Field, Formik } from "formik";
import "@blueprintjs/core/lib/css/blueprint.css";

function App() {
  return (
    <div className="App">
      <Formik initialValues={{ input: 0 }}>
        {props => (
          <Form>
            <Field component={InputGroup} type="string" name="input" />
            <Field component={NumericInput} type="string" name="input" />
            <Field component={TextArea} type="string" name="input" />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
