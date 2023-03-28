import { useTranslation } from "react-i18next";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const { t } = useTranslation('common');
    const error = useRouteError();

    return <div>
        {t('error')}
    </div>
}

export default ErrorPage;