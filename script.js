/* =========================================
   EDUVORA NOTIFICATION
========================================= */

.eduvora-notification {
    position: fixed;

    left: 50%;
    bottom: 25px;

    z-index: 5000;

    display: flex;
    align-items: center;

    gap: 10px;

    max-width: calc(100% - 30px);

    padding: 12px 17px;

    background: #101828;
    color: white;

    border-radius: 12px;

    box-shadow:
        0 15px 40px
        rgba(16, 24, 40, 0.2);

    font-size: 11px;
    font-weight: 600;

    opacity: 0;

    transform:
        translate(-50%, 20px);

    pointer-events: none;

    transition:
        opacity 0.3s ease,
        transform 0.3s ease;
}

.eduvora-notification.show {
    opacity: 1;

    transform:
        translate(-50%, 0);
}

.notification-check {
    width: 22px;
    height: 22px;

    flex-shrink: 0;

    display: grid;
    place-items: center;

    background: #12B76A;

    border-radius: 50%;

    font-size: 11px;
}
