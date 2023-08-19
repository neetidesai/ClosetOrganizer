import cv2 as cv2
import tensorflow as tf
import numpy as np

class ImageProcessor():

    def __init__(self, image):
        self.image = cv2.imread(image)
        self.model = tf.keras.models.load_model('my_model.h5')
        self.class_names = ['Top', 'Trouser', 'Pullover', 'Dress', 'Coat', 
                            'Sandal', 'Shirt', 'Sneaker', 'Bag', 'Ankle boot']
        
        self.model.summary()

    def remove_background(self):

        gray_image = cv2.cvtColor(self.image, cv2.COLOR_BGR2GRAY)

        ret,baseline = cv2.threshold(gray_image,127,255,cv2.THRESH_TRUNC)
 
        ret,background = cv2.threshold(baseline,126,255,cv2.THRESH_BINARY)
    
        ret,foreground = cv2.threshold(baseline,126,255,cv2.THRESH_BINARY_INV)
    
        foreground = cv2.bitwise_and(self.image, self.image, mask=foreground)  # Update foreground with bitwise_and to extract real foreground
    
        # Convert black and white back into 3 channel greyscale
        background = cv2.cvtColor(background, cv2.COLOR_GRAY2BGR)
    
        # Combine the background and foreground to obtain our final image
        finalimage = background+foreground

        cv2.imshow('result', finalimage)
        cv2.waitKey(0)
        cv2.destroyAllWindows()

    def classify_image(self):
        
        img = cv2.resize(self.image, dsize=(28, 28))
        
        img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        img = cv2.bitwise_not(img)
        img = img / 255
        print(img.shape)
        img_list = (np.expand_dims(img,0))

        prediction = self.model.predict(img_list)

        prediction_idx = np.argmax(prediction[0])

        print(self.class_names[prediction_idx])

c = ImageProcessor('/Users/neeti/Desktop/React-Native/ClosetOrganizer/assets/boot.jpeg')

c.classify_image()