import React from 'react';
import ImageInputList from '../ImageInputlist';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';

export default function FormImagePicker({ name, images }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={(newImage) =>
          setFieldValue(name, [...values[name], newImage])
        }
        onRemoveImage={(uri) =>
          setFieldValue(
            name,
            values[name].filter((image) => uri !== image)
          )
        }
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
