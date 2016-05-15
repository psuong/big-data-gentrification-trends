from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
def home():
    context_dict = {
        'neighborhoods': create_neighborhood_list()
    }
    pass


def create_neighborhood_list():
    """
    Reads the textfile for all neighborhoods currently logged and appends it
    to a list.
    :return: list
    """
    neighborhood_list = []
    with open('neighborhoods.txt', 'r') as neighborhoods:
        for neighborhood in neighborhoods:
            neighborhood_list.append(neighborhood)
    return neighborhood_list
