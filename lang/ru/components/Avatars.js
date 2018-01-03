export default {
  header: 'Avatar',
  headerText: 'Компонент `v-avatar` используется для управления размером и границей отзывчевых изображений, которые обычно используются для отображения изображений профиля.',
  components: ['v-avatar'],
  examples: [{
    standard: {
      header: 'Стандартный дисплей',
      desc: 'Аватар имеет динамический размер, который можно масштабировать для любой ситуации. Для отображения аватара без скругления углов доступна вариация **tile**.'
    },
    advanced: {
      header: 'Расширенное использование',
      desc: 'Объединение аватара с другими компонентами позволяет вам создавать красивые пользовательские интерфейсы прямо из коробки.'
    },
    iconAndText: {
      header: 'Иконка и текст',
      desc: 'Аватара также принимает компонент `v-icon` или текст. Смешайте и совместите функциональность, чтобы создать что-то уникальное.'
    }
  }]
}
