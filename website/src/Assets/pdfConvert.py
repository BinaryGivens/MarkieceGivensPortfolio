import os
from pdf2image import convert_from_path

# Get the current directory of the script
script_dir = os.path.dirname(os.path.abspath(__file__))

# Construct the full path to the PDF file
pdf_path = os.path.join(script_dir, 'markiece-givens-resume.pdf')

# Verify if the file exists
if not os.path.exists(pdf_path):
    print(f"File not found: {pdf_path}")
else:
    # Convert PDF to images
    images = convert_from_path(pdf_path, dpi=200)

    # Do something with the images
    for image in images:
        image.show()  # Just to display the image
