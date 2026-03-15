<script lang="ts">
    import { imageCDN } from "$lib/utils/image";
</script>

<nav aria-label="Main">
    <div id="header">
        <a href="/">
            <img
                width="176"
                height="48"
                alt="European Market Logo"
                src={imageCDN("images/min/logo.png", "?tr=h-60")}
            />
        </a>
    </div>

    <div id="footer">
        <ul>
            <li>
                <a href="/locations">Our Locations</a>
            </li>
            <li>
                <a href="/contact">Contact Us</a>
            </li>
        </ul>
    </div>
</nav>

<style>
    #header,
    #footer {
        z-index: 1;
        position: fixed;
        left: 0;
        right: 0;

        margin: auto;
        max-width: 80rem;

        background: rgb(255, 255, 255);
    }

    #header {
        height: 60px;
        top: 0;
        display: flex;
    }

    #header a {
        text-decoration: none;
        height: inherit;
        display: flex;
        align-items: center;
        padding: 0 0 0 16px;
    }

    #header img {
        height: 48px;
        width: auto;
    }

    #footer {
        height: 50px;
        bottom: 0;

        background: rgb(196, 0, 9);
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.15);
    }

    #footer ul {
        display: flex;
        list-style-type: none;
        padding: 0;
        margin: 0;
        height: 100%;
    }

    #footer li {
        flex: 1;
        text-align: center;
    }

    #footer a {
        color: #ffffff;
        text-decoration: none;

        font-weight: 800;
        font-size: 1.2rem;
        font-family: "Plus Jakarta Sans Variable", sans-serif;

        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #footer a:hover {
        background: #9a1915;
    }
</style>
