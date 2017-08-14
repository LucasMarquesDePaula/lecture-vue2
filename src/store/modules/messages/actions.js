import {
  messages
} from "../../utils/types.js"

import uniqueId from "lodash/uniqueId"

class Message {
  constructor(text, author) {
    this.message = {
      id: uniqueId(),
      text: text,
      author: author
    }
  }

  text(text) {
    this.message.text = text
    return this
  }

  author(author) {
    this.message.author = author
    return this
  }

  save(store) {
    return store.commit(messages.mutations.POST, this.message)
  }
}

const actions = {
  [messages.actions.delete]: (store, id) => {
    return store.commit(messages.mutations.DELETE, id)
  },
  [messages.actions.post](store, message) {
    message.id = generateUuid();
    return store.commit(messages.mutations.INSERT, message);
  },
  [messages.actions.post]: (store, text) => new Message(text).save(store),
  [messages.actions.put]: (store, text) => {
    new Message(text).save(store)
  }
}

export default actions
