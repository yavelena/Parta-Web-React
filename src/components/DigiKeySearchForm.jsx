import { useFormStatus } from "react-dom";

import Icon from "./Icon";
import Panel from "./Panel";


function DigiKeySubmitButton() {

    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            name="intent"
            value="search"
            className="btn btn-primary"
            disabled={pending}
        >
            <Icon name="icon-search" />
            {pending ? "Searching..." : "Search"}
        </button>
    )
}

function DigiKeyClearButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            name="intent"
            value="clear"
            className="btn btn-secondary"
            formNoValidate
            disabled={pending}
            onClick={event => {
                event.currentTarget.form?.reset();
            }}
        >
            Clear
        </button>
    );
}

export default function DigiKeySearchForm({
    formAction,
    queryError
}) {

    const hasQueryError = Boolean(queryError);

    return (
        <Panel
            title="Component Search"
            bodyClassName="flex-col gap-4"
        >

            <form
                id="digikey-search-form"
                className="panel-body-section flex-col gap-4"
                action={formAction}
                noValidate
            >
                <div
                    id="search-query-input-field"
                    className="form-field"
                >

                    <label
                        htmlFor="component-query-input"
                        className="form-label"
                    >
                        Search Query
                    </label>

                    <div className="search-container rounded row-vertical-center gap-3">
                        <Icon name="icon-search" className="icon-xl" />
                        <input
                            name="query"
                            id="component-query-input"
                            type="text"
                            placeholder="e.g. STM32F407VGT6, 10k 0402, Murata 0.1uF"
                            required
                            minLength={2}
                            autoComplete="off"
                            aria-describedby={hasQueryError ? "component-query-error" : undefined}
                            aria-invalid={hasQueryError}
                        />
                    </div>
                    {hasQueryError && (
                        <p
                            id="component-query-error"
                            className="form-error"
                            aria-live="polite"
                        >
                            {queryError}
                        </p>
                    )}
                </div>

                <div className="grid-4 gap-3">
                    <div className="form-field">
                        <label
                            htmlFor="component-qty-input"
                            className="form-label"
                        >
                            Quantity
                        </label>
                        <input
                            id="component-qty-input"
                            name="quantity"
                            className="form-control rounded-sm"
                            type="number"
                            min={1}
                            defaultValue={1}
                        />
                    </div>
                    <div className="form-field">
                        <label
                            htmlFor="component-site-select"
                            className="form-label"
                        >
                            Site
                        </label>
                        <select
                            id="component-site-select"
                            name="site"
                            className="form-control rounded-sm"
                            defaultValue="US"
                        >
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="EU">Europe</option>
                        </select>
                    </div>

                    <div className="form-field">
                        <label
                            htmlFor="component-language-select"
                            className="form-label"
                        >
                            Language
                        </label>
                        <select
                            id="component-language-select"
                            name="language"
                            className="form-control rounded-sm"
                            defaultValue="en"
                        >
                            <option value="en">English</option>
                            <option value="fr">French</option>
                        </select>
                    </div>

                    <div className="form-field">
                        <label
                            htmlFor="component-currency-select"
                            className="form-label"
                        >
                            Currency
                        </label>
                        <select
                            id="component-currency-select"
                            name="currency"
                            className="form-control rounded-sm"
                            defaultValue="USD"
                        >
                            <option value="USD">USD ($)</option>
                            <option value="CAD">CAD ($)</option>
                            <option value="EUR">EUR (€)</option>
                        </select>
                    </div>
                </div>
                <div className="form-actions flex-row wrap gap-3">
                    <DigiKeySubmitButton />
                    <DigiKeyClearButton />
                </div>
            </form>
            <p className="hint-note">
                You can search by part number, supplier number, manufacturer, or
                keyword.
            </p>
        </Panel>
    )
}
