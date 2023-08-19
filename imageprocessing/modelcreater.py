# TensorFlow and tf.keras
import tensorflow as tf
from tensorflow import keras
# Helper libraries
import numpy as np
import matplotlib.pyplot as plt

def create_model():
    class_names = ['Top', 'Trouser', 'Pullover', 'Dress', 'Coat', 
                            'Sandal', 'Shirt', 'Sneaker', 'Bag', 'Ankle boot']
    
    fashion_mnist = tf.keras.datasets.fashion_mnist

    (train_images, train_labels), (test_images, test_labels) = fashion_mnist.load_data()

    train_images = train_images / 255.0

    test_images = test_images / 255.0

    model = keras.Sequential([
      keras.layers.Conv2D(input_shape=(28,28,1), filters=8, kernel_size=3, 
                          strides=2, activation='relu', name='Conv1'),
      keras.layers.Flatten(),
      keras.layers.Dense(10, name='Dense')
    ])

    model.compile(optimizer='adam', 
                  loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
                  metrics=[keras.metrics.SparseCategoricalAccuracy()])
    model.fit(train_images, train_labels, epochs=100)

    test_loss, test_acc = model.evaluate(test_images, test_labels)

    return model
    # probability_model = tf.keras.Sequential([model, 
    #                                         tf.keras.layers.Softmax()])

    # return probability_model

model = create_model()
optimizer = tf.keras.optimizers.Adam(lr=0.0001, beta_1=0.9, beta_2=0.999, epsilon=None, amsgrad=False)

# model.compile(optimizer=optimizer,
#               loss='sparse_categorical_crossentropy',
#               metrics=['accuracy'])
model.save('my_model.h5', include_optimizer=True)
print('saved')


    # predictions = probability_model.predict(test_images)






    # def plot_image(i, predictions_array, true_label, img):
    #   true_label, img = true_label[i], img[i]
    #   plt.grid(False)
    #   plt.xticks([])
    #   plt.yticks([])

    #   plt.imshow(img, cmap=plt.cm.binary)

    #   predicted_label = np.argmax(predictions_array)
    #   if predicted_label == true_label:
    #     color = 'blue'
    #   else:
    #     color = 'red'

    #   plt.xlabel("{} {:2.0f}% ({})".format(class_names[predicted_label],
    #                                 100*np.max(predictions_array),
    #                                 class_names[true_label]),
    #                                 color=color)

    # def plot_value_array(i, predictions_array, true_label):
    #   true_label = true_label[i]
    #   plt.grid(False)
    #   plt.xticks(range(10))
    #   plt.yticks([])
    #   thisplot = plt.bar(range(10), predictions_array, color="#777777")
    #   plt.ylim([0, 1])
    #   predicted_label = np.argmax(predictions_array)

    #   thisplot[predicted_label].set_color('red')
    #   thisplot[true_label].set_color('blue')