import { FC, Fragment, ReactElement, useMemo } from "react";

import { Formik, Form, Field, FormikHelpers } from "formik";

import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

import {
  BaseButton,
  BaseInputPhone,
  BaseInputPassword,
  BaseInputText,
} from "src/shared/components";

import { useAppSelector } from "src/shared/hooks";

import { formErrors, reverseLink } from "../../lib";

import { IAuthFormData, TAuthType } from "../../model";

import "./auth-form.scss";

interface Props {
  authType: TAuthType;
  onSubmit: (
    values: IAuthFormData,
    options: FormikHelpers<IAuthFormData>
  ) => void;
}

export const AuthForm: FC<Props> = ({ authType, onSubmit }): ReactElement => {
  const { t } = useTranslation();

  const { isLoading } = useAppSelector(({ auth }) => auth);

  const isRegistrationType: boolean = useMemo(
    () => authType === "registration",
    [authType]
  );

  const initialFormState: IAuthFormData = useMemo(() => {
    const initialState: IAuthFormData = { phone: "", password: "" };

    if (isRegistrationType) {
      initialState.firstName = "";

      initialState.lastName = "";
    }

    return initialState;
  }, [isRegistrationType]);

  return (
    <div className="auth-form">
      <h1 className="auth-form__title">{t(`authForm.title.${authType}`)}</h1>
      <Formik<IAuthFormData>
        initialValues={initialFormState}
        validationSchema={formErrors(authType)}
        onSubmit={onSubmit}
      >
        {() => (
          <Form className="auth-form-formik">
            <Field
              type="phone"
              name="phone"
              component={BaseInputPhone}
              className="auth-form-formik__field"
              required
            />
            <Field
              type="password"
              name="password"
              component={BaseInputPassword}
              className="auth-form-formik__field"
              required
            />
            {isRegistrationType && (
              <Fragment>
                <Field
                  name="firstName"
                  component={BaseInputText}
                  className="auth-form-formik__field"
                  required
                />
                <Field
                  name="lastName"
                  component={BaseInputText}
                  className="auth-form-formik__field"
                  required
                />
              </Fragment>
            )}

            <div className="auth-form-formik__description">
              {t(`authForm.form.description.${authType}`)}{" "}
              <Link
                to={`/${reverseLink[authType]}`}
                className="auth-form-formik__description-link"
              >
                {t(`authForm.form.description.link.${authType}`)}
              </Link>
            </div>
            <BaseButton
              buttonType="submit"
              color="dark-blue"
              size="medium"
              isLoading={isLoading}
            >
              {t(`authForm.form.btn.${authType}`)}
            </BaseButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};
