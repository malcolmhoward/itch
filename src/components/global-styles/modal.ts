
import {css} from "../styles";

export default css`

.ReactModal__Overlay {
  z-index: 200;
}

.ReactModal__Overlay--after-open {
  animation: drop-down .2s;
}

.ReactModal__Content .modal {
  min-width: 200px;
  min-height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .header {
    background: ${props => props.theme.sidebarBackground};
    padding: 15px 20px;
    display: flex;
    flex-direction: row;

    h2 {
      color: ${props => props.theme.secondaryText};
      font-size: ${props => props.theme.fontSizes.modal};
    }

    .close-modal {
      font-size: 20px;
      @include secondary-link;
    }

    .filler {
      flex-grow: 8;
    }
  }

  .big-wrapper {
    display: flex;
    flex-direction: row;

    .cover {
      flex: 1 0;
      height: auto;
      width: 190px;
      align-self: flex-start;
      margin-left: 20px;
    }

    .buttons {
      flex-grow: 1;
    }
  }

  .body {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
    line-height: 1.6;

    ul {
      list-style-type: disc;
      margin-bottom: 1.5em;

      li {
        margin-left: 1.5em;
      }
    }

    .message {
      padding: 0 20px;
      overflow-y: auto;
      max-height: 380px;
      -webkit-user-select: initial;

      h1, h2, h3, h4, h5, h6 {
        margin-bottom: .4em;
        font-size: $base-text-size + 2px;
        font-weight: bold;
      }

      a {
        color: darken($ivory, 5%);

        &:hover {
          color: $ivory;
          cursor: pointer;
        }
      }

      p img {
        max-width: 100%;
      }
      
      code {
        font-family: monospace;
      }
    }

    .message .secondary {
      color: $secondary-text-color;
    }

    p {
      line-height: 1.4;
      margin: 8px 0;
    }

    .icon {
      margin-top: 8px;
      margin-right: 12px;
      font-size: 48px;
    }
  }

  .modal-widget {
    padding: 10px 20px;
    flex-grow: 1;

    input[type=number], input[type=text], input[type=password] {
      @include heavy-input;
      width: 100%;
    }

    input[type=number] {
      &::-webkit-inner-spin-button, 
      &::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
      }
    }

    strong {
      font-weight: bold;
    }

    p {
      line-height: 1.4;
      margin: 8px 0;
    }

    .json-tree-container {
      width: 100%;
      height: 350px;
      overflow-y: auto;
    }

    .prereqs-rows {
      display: flex;
      flex: 0 1;
      flex-direction: column;
      align-content: flex-start;
    }

    .prereqs-row {
      display: flex;
      flex: 0 1;
      flex-direction: row;
      align-items: center;
      margin: 14px 0;
      margin-left: 10px;

      .task-status {
        margin-top: 5px;
        font-size: 80%;
        color: $secondary-text-color;
      }
    }

    .clear-browsing-data-list {
      label {
        display: block;
        border-left: 3px solid $pref-border-color;
        padding: 5px 0;
        padding-left: 5px;
        margin: 3px 0;
        margin-bottom: 10px;
        transition: 0.2s border ease-in-out;

        &:hover {
          cursor: pointer;
        }

        &.active {
          border-color: $accent-color;
        }
      }

      .checkbox {
        margin: 0;
        display: flex;
        align-items: center;

        input[type=checkbox] {
          margin-right: 10px;
        }
      }

      .checkbox-info {
        margin: 0;
        margin-top: 5px;
        margin-left: 5px;
        font-size: 90%;
        color: $secondary-text-color;
      }
    }
  }

  .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;

    .filler {
      flex-grow: 8;
    }

    &.flavor-big {
      flex-direction: column;
      align-items: stretch;
      padding: 8px 20px;
      max-height: 300px;
      overflow-y: auto;

      .button {
        transition: -webkit-filter 0.2s;
        font-weight: bold;
        text-shadow: 0 0 2px rgba(0, 0, 0, 0.58);

        &:not(.action-play) {
          -webkit-filter: grayscale(100%) brightness(70%);
        }

        &:hover {
          -webkit-filter: brightness(110%);
        }

        &, &.secondary {
          display: flex;
          align-items: center;
          margin: 8px 0;
          font-size: 16px;
          padding: 14px 14px;
        }

        .tag {
          margin: 0 0 0 7px;
          font-size: 80%;
          padding: 5px 4px;
          border-radius: 4px;
          background: #fffff0;
          color: $button-background-color;
          text-shadow: none;
        }

        .icon {
          margin-right: 10px;
        }
      }
    }

    .button {
      flex-shrink: 0;
      margin: 0 8px;
      @include light-button;

      &.secondary {
        @include light-button($ui-background-color);
      }

      .icon {
        margin-right: 5px;
      }

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
}

`;
