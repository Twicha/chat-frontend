import { FC, ReactElement, useMemo } from "react";

import { Formik, Form, Field } from "formik";

import { isEqual } from "lodash";

import {
  BaseInputText,
  BaseInputPhone,
  BaseButton,
} from "src/shared/components";

import { useAppDispatch, useAppSelector } from "src/shared/hooks";

import { fetchUpdateAccountAction } from "src/shared/modules";

import { formErrors } from "../../lib";

import { IAccountFormData } from "../../model";

import "./account-form.scss";

interface Props {}

export const AccountForm: FC<Props> = (): ReactElement => {
  const dispatch = useAppDispatch();

  const { account, isLoading } = useAppSelector(({ account }) => account);

  const updateAccountHandler = (values: IAccountFormData) => {
    dispatch(fetchUpdateAccountAction(values));
  };

  const accountInfo: IAccountFormData = useMemo(
    () => ({
      firstName: account?.firstName || "",
      lastName: account?.lastName || "",
      phone: account?.phone || "",
    }),
    [account]
  );
  return (
    <Formik<IAccountFormData>
      initialValues={accountInfo}
      validationSchema={formErrors()}
      onSubmit={updateAccountHandler}
    >
      {({ values }) => (
        <Form className="account-form">
          <Field
            name="firstName"
            component={BaseInputText}
            className="account-form__field"
            required
          />
          <Field
            name="lastName"
            component={BaseInputText}
            className="account-form__field"
            required
          />
          <Field
            type="phone"
            name="phone"
            component={BaseInputPhone}
            className="account-form__field"
            required
          />
          <BaseButton
            buttonType="submit"
            color="dark-blue"
            size="medium"
            isLoading={isLoading}
            disabled={isEqual(values, accountInfo)}
          >
            Save
          </BaseButton>
        </Form>
      )}
    </Formik>
  );
};
