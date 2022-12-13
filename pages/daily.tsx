import * as React from 'react';
import { Formik, Form, Field } from 'formik';

const MyForm = () => {
  const onSubmit = (values: MyFormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    console.log("SUBMIT", values)
    setSubmitting(false);
  };

  type MyFormValues = {
    date: string;
    wakeUp: string;
    exercise: boolean;
    alcohol: string;
    learn: string;
    weight: number;
  };

  return (
      <div className={'daily-container'}>
    <Formik initialValues={{
      date: new Date().toISOString().substring(0, 10),
      wakeUp: '',
      exercise: false,
      alcohol: '',
      learn: '',
      weight: 0,
    }} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
            <div className={"input-container"}>
              <p className={'form-label'}>Today's Date</p>
              <Field placeholder={"Date"} className="form-input" name="date" type="date" />
            </div>

            <div className={"input-container"}>
              <p className={'form-label'}>Wake</p>
              <Field placeholder={"Wake up Time"} className="form-input" name="wakeUp" type="time" />
            </div>

            <div className={"input-container"}>
              <p className={'form-label'}>Exercised?</p>
              <Field style={{width: "10%"}} id="fieldName" placeholder={"Exercise"} className="form-input" name="exercise" type="checkbox" />
            </div>

            <div className={"input-container"}>
              <p className={'form-label'}>Weight</p>
              <Field style={{width: "30%"}}placeholder={"Weight"} className="form-input" name="weight" type="number" />
            </div>

            <Field style={{width: "100%"}} placeholder={"Alcohol"} className="form-input" name="alcohol" type="text" />
            <Field style={{width: "100%"}} placeholder={"Learn"} className="form-input" name="learn" type="text" />
            <Field style={{width: "100%"}} placeholder={"Weight"} className="form-input" name="weight" type="number" />
            <button className="form-button" type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
      )}
    </Formik>
      </div>
  );
};

export default MyForm;
