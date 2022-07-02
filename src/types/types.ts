import type { Timestamp } from "firebase/firestore";

export interface FoodOrdered {
    name: string;
    rating: number;
    imagePath?: string;
    dateCreated?: any;
    comment: string;
}

export interface Restaurant {
    restaurantId: string;
    dateCreated: any;
    userId: string;
    name: string;
    foodOrdered: FoodOrdered[];
    cuisine: string;
}

export interface LeckerLog {
    restaurant: Restaurant;
}

export interface AutocompletePrediction {
    /**
     * This is the unformatted version of the query suggested by the Places
     * service.
     */
    description: string;
    /**
     * The distance in meters of the place from the {@link
     * google.maps.places.AutocompletionRequest.origin}.
     */
    distance_meters?: number;
    /**
     * A set of substrings in the place&#39;s description that match elements in
     * the user&#39;s input, suitable for use in highlighting those substrings.
     * Each substring is identified by an offset and a length, expressed in
     * unicode characters.
     */
    matched_substrings: google.maps.places.PredictionSubstring[];
    /**
     * A place ID that can be used to retrieve details about this place using
     * the place details service (see {@link
     * google.maps.places.PlacesService.getDetails}).
     */
    place_id: string;
    /**
     * Structured information about the place&#39;s description, divided into a
     * main text and a secondary text, including an array of matched substrings
     * from the autocomplete input, identified by an offset and a length,
     * expressed in unicode characters.
     */
    structured_formatting: google.maps.places.StructuredFormatting;
    /**
     * Information about individual terms in the above description, from most to
     * least specific. For example, &quot;Taco Bell&quot;, &quot;Willitis&quot;,
     * and &quot;CA&quot;.
     */
    terms: google.maps.places.PredictionTerm[];
    /**
     * An array of types that the prediction belongs to, for example
     * <code>'establishment'</code> or <code>'geocode'</code>.
     */
    types: string[];
  }