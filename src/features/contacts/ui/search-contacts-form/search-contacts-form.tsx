import { FC, ReactElement } from "react";

import classNames from "classnames";

import { Field, Form, Formik } from "formik";

import { BaseButton, BaseInputPhone } from "src/shared/components";

import { useAppDispatch } from "src/shared/hooks";

import { fetchGetUsersAction } from "src/shared/store/slices";

import "./search-contacts-form.scss";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
}

export const SearchContactsForm: FC<Props> = ({ className }): ReactElement => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  return (
    <Formik<{ phone: string }>
      initialValues={{ phone: "" }}
      onSubmit={(values) => {
        dispatch(
          fetchGetUsersAction({ phone: encodeURIComponent(values.phone) })
        );
      }}
    >
      {() => (
        <Form className={classNames("search-contacts-form", className)}>
          <Field
            name="phone"
            component={BaseInputPhone}
            className="search-contacts-form__field"
            required
          />
          <BaseButton
            className="search-contacts-form__btn"
            buttonType="submit"
            color="dark-blue"
            size="medium"
            block={false}
            outline
          >
            {t("common.search")}
          </BaseButton>
        </Form>
      )}
    </Formik>
  );
};
