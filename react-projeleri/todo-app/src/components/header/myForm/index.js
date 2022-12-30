import React from "react";

import { Formik, Field, Form } from "formik";
import { schema } from "./validations";
import { useToDo } from "../../../contexts/ToDoContext"

const MyForm = () => {
  
  const { addToDo} = useToDo()
  
  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{
          newToDo: "",
        }}
        onSubmit={(values, bag) => {
          addToDo(values.newToDo)
          bag.resetForm()
        }}
      >
      <Form>
        <Field className="new-todo" name="newToDo" placeholder="What needs to be done?" autoFocus />
      </Form>
      </Formik>
    </>
  );
};

export default MyForm;
