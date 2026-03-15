<script lang="ts">
    import { onMount } from "svelte";
    import { MetaTags } from "svelte-meta-tags";
    import { imageCDN } from "$lib/utils/image";
    import { submitForm } from "$lib/utils/form";
    import { viewportHeight } from "$lib/utils/viewport";

    let { data } = $props();

    let backgroundImage = $state("");

    onMount(() => {
        backgroundImage = imageCDN(
            "images/min/fresh-vegetables.jpg",
            `?tr=h-${viewportHeight(90)}`,
        );
    });

    let formStatus = $state("");

    async function handleSubmit(event: SubmitEvent) {
        const form = event.target as HTMLFormElement;

        if (!form.checkValidity()) {
            formStatus = "Please Fill In All Input Fields";
            return;
        }

        try {
            await submitForm(form);
            formStatus = "Message Sent, We Will Contact You Soon.";
            form.reset();
        } catch (error: unknown) {
            formStatus = `Message Failed To Send, Error Message: ${String(error)}`;
            console.error(error);
        }
    }
</script>

<MetaTags
    {...data.baseMetaTags}
    title="Contact Us"
    description="Contact European Market in Chattanooga, TN. Send us a message about our European grocery products, catering, or special orders."
    openGraph={{
        ...data.baseMetaTags.openGraph,
        title: "Contact European Market",
        description:
            "Get in touch with European Market. We'd love to hear from you about our European grocery products.",
    }}
/>

<section style="background-image: url({backgroundImage});">
    <form
        name="contact"
        method="POST"
        action="/contact"
        data-netlify="true"
        {...{ "netlify-honeypot": "bot-field" }}
        onsubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
        }}
    >
        <input type="hidden" name="bot-field" />

        {#if formStatus}
            <p>{formStatus}</p>
        {/if}

        <input
            required
            name="name"
            type="text"
            id="person-name"
            placeholder="Name"
        />

        <input
            required
            name="email"
            type="email"
            id="person-email"
            placeholder="Email"
        />

        <textarea
            required
            name="message"
            id="person-message"
            placeholder="Message"
        ></textarea>

        <button type="submit">Send</button>
    </form>
</section>

<style>
    section {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top;
        background-position-x: 60%;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    form input,
    form textarea {
        color: #202020;
        width: 100%;
        border: 1px solid #517a3e;
        display: block;
        padding: 0.4em;
        max-width: 500px;
        font-size: 1.2em;
        margin-bottom: 0.5em;
        background: rgba(255, 255, 255, 0.8);
    }

    form input:focus,
    form textarea:focus {
        outline: none;
    }

    form input:not(:focus),
    form textarea:not(:focus) {
        opacity: 0.8;
    }

    form input:valid,
    form textarea:valid {
        outline: 2px solid #517a3e;
    }

    form textarea {
        min-height: 150px;
    }

    form button {
        color: #fff;
        cursor: pointer;
        border: none;
        padding: 0.4em;
        font-size: 1.2em;
        background: #e30613;
    }

    form button:hover {
        background: #9a1915;
    }

    form button:focus {
        outline: none !important;
        border: 1px #9a1915;
    }

    ::placeholder {
        color: #202020;
        opacity: 1;
    }

    p {
        padding: 0 1em;
        line-height: 2em;
        color: #fff;
        background: #517a3e;
    }
</style>
