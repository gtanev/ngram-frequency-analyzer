import React from "react";
import FileDrop from "react-file-drop";
import { Col, Input, Row } from "reactstrap";

const reader = new FileReader();
const allowedExtensions = /(\.txt|\.rtf|\.md|\.json|\.csv)$/i;

export default function InputFormBodyRow({ formState, handleFile, handleChange }) {
  const handleFileDrop = (files) => {
    const file = files[0];
    const supported = allowedExtensions.test(file.name);
    reader.onload = () => handleFile(file.name, reader.result, supported);
    reader.readAsText(file);
  };

  return (
    <Row form className="mb-0">
      <Col>
        <FileDrop onDrop={handleFileDrop}>
          <Input type="textarea"
                 id="textInput"
                 name="textInput"
                 disabled={formState.textInputDisabled}
                 placeholder={formState.textInputPlaceholder}
                 valid={formState.textInputValid}
                 invalid={formState.textInputInvalid}
                 value={formState.textInput}
                 rows={3}
                 onChange={handleChange}/>
        </FileDrop>
      </Col>
    </Row>
  );
}